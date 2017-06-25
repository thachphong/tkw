<?php
class Template_model extends ACWModel
{	
	public static function init()
	{
		Login_model::check_admin();	
	}
	public static function action_index()
	{		
		$db = new Template_model();
		$list = $db->get_structure(1);
		$options = $db->get_option(1);
		$data =array();
		//$menu_top = array();
		foreach($list as $item){			
			$data[$item['model']][]= $item;			
		}
		foreach($options as $item){			
			$data['options'][$item['option_key']][]= $item;			
		}
		
		return ACWView::template_admin('template.html',$data);
	}
	public static function action_editmod()
	{		
		$param = self::get_param(array('acw_url'));	
		$db = new Template_model();
		$list = $db->get_structure(1,$param['acw_url'][0]);
		$options = $db->get_option(1);
		$data =array();
		//$menu_top = array();
		foreach($list as $item){			
			$data[$item['model']][]= $item;			
		}
		foreach($options as $item){			
			$data['options'][$item['option_key']][]= $item;			
		}
		
		return ACWView::template_admin('template_module/mod.html',$data);
	}
	public static function action_mod()
	{		
		$db = new Template_model();
		$data['list'] = $db->get_module_list(1);
		
		
		return ACWView::template_admin('template_module.html',$data);
	}
	public static function action_content()
	{		
		$db = new Template_model();
		$data['list'] = $db->get_module_list(1);
		
		
		return ACWView::template_admin('template_module.html',$data);
	}
	public static function action_list()
	{		
		$db = new Template_model();
		$data['list'] = $db->get_template_list();
		
		return ACWView::template_admin('template_list.html',$data);
	}
	public static function action_new()
	{		
		$param['template_id'] = null;	
		$param['template_no'] = '';
		$param['template_name'] = '';
		$param['active'] = 0;	
		
		return ACWView::template_admin('template/edit.html', $param);
	}
	public static function action_edit()
	{
		$param = self::get_param(array('acw_url'));	
		
		$db = new Template_model();
		$param = $db->get_template_info($param['acw_url'][0]);
		
		return ACWView::template_admin('template/edit.html', $param);
	}
	public static function action_update(){
		$param = self::get_param(array(
				'struct_id',
			    'struct_key',
				'struct_val',	
				'model',					 
				'template_id',	
				'struct'			
			));
		$param['template_id']=1;
		$result = array('status' => 'OK');
		$result['status'] = 'OK';	
		$result['msg'] = 'Cập nhật thành công!';		
		$db = new Template_model();
		$msg = "";//$db->check_validate_update($param);
		if($msg == ""){
			if(strlen($param['struct_id'])==0){			
				$db->insert_struct($param);
			}else{
				$db->update($param);
			}
		}else{
			$result['status'] = 'ER';	
			$result['msg'] = $msg;
		}
		return ACWView::json($result);
	}
	public function check_validate_update(&$param){
		if(strlen($param['struct_val'])== 0){
			return "Bạn chưa nhập giá trị !";
		}		
		return "";
	}
	private function insert_struct($param){		
		//$login_info = ACWSession::get('user_info');
		//$param['user_id'] = $login_info['user_id'];		
		
		$sql = "INSERT INTO template_detail
					(					
					  struct_id,
					  struct_val,
					  template_id
					)
				VALUES
					(					  
					  :struct_id,
					  :struct_val,
					  :template_id					
					)
				";
		$sql_pa['template_id'] =$param['template_id'];
		if(isset($param['struct'])){
			//$sql_pa['model'] = 'menu_top';
			foreach($param['struct'] as $key=>$val){
				$info = explode('_',$key);
				if(strlen($info[1]) > 0){
					$this->update($info[1],$val);
				}else{
					$sql_pa['struct_id'] = $info[0];
					$sql_pa['struct_val'] = $val;
					$this->execute($sql,$sql_pa );	
				}				
			}
		} 	
		return TRUE;
	}
	protected function update($template_detail_id,$val)
	{				
		//$login_info = ACWSession::get('user_info');
		//$param['user_id'] = $login_info['user_id'];		
		$sql = "update template_detail
					set struct_val = :struct_val	
					where template_detail_id = :template_detail_id
				";
		
 		$sql_par = array(
 					'template_detail_id'=>$template_detail_id,
					'struct_val'=>	$val
					);			
		$this->execute($sql,$sql_par );
		return TRUE;	
	}
	public function get_structure($template_id,$mod_id = 0){
		$sql="select t.*,d.struct_val ,d.template_detail_id
				from template_structure  t
				LEFT JOIN template_detail d
				on d.struct_id = t.struct_id and d.template_id = :template_id
				where t.mod_id =:mod_id
				order by sort";
		return $this->query($sql,array('template_id'=>$template_id,'mod_id'=>$mod_id));
	}
	public function get_option($template_id){
		$sql="select *
				from template_option  	";
		return $this->query($sql);
	}
	public function get_module_list($template_id){
		$sql="select *
				from template_module  	";
		return $this->query($sql);
	}
	public function get_template_list(){
		$sql="select *	from template";
		return $this->query($sql);
	}
	public function get_template_info($template_id){
		$sql="select *	from template where template_id = $template_id";
		$res =  $this->query($sql);
		if(count($res) > 0) return $res[0];
		return NULL;
	}
	public static function action_create()
	{
		$db = new Template_model();
		$data = $db->get_structure(1);
		$main_style=array();
		foreach($data as $row){			
			$main_style[$row['model']][$row['struct_key']]= $row['struct_val'];			
		}
		$html = new Htmldom_lib();
		$html->create_basic_html(ACW_TEMPLATE_DIR.'/index.html');
		$css_file = PUBLIC_TEMPLATE_PATH.'/css/style.css';
		$style = new Cssstyle_lib($main_style['body']);
		$css = new Cssdom_lib($css_file);
		$css->set_style('body',$style,TRUE);
		$style = new Cssstyle_lib();
		$style->margin_right = '0px';
		$style->margin_left = '0px';
		$css->set_style('.row',$style);
		
		$html->add_logo();
		$html->add_menu($main_style['menu_top']);
		if($main_style['slide_top']['vitri']== '0'){ //full
			$width = '100%';
			$height = $main_style['slide_top']['height'];
			$speed = $main_style['slide_top']['speed'];
			$html->add_slides("content",$width,$height,$speed);
		}
		$html->add_content_section(1);
		if(isset($main_style['content']['total_column'])){
			$html->split_column_section('section_1',$main_style['content']['total_column'],$main_style['content']['vitri_content']);
		}
		$html->add_cssfile('<%$smarty.const.ACW_BASE_URL_TEMPLATE%>/css/bootstrap.min.css');	
		$html->add_cssfile('<%$smarty.const.ACW_BASE_URL_TEMPLATE%>/css/style.css');
		$html->add_jsfile('<%$smarty.const.ACW_BASE_URL_TEMPLATE%>/js/jquery.min.js');
		$html->add_jsfile('<%$smarty.const.ACW_BASE_URL_TEMPLATE%>/js/bootstrap.min.js');
		//$html->ad
		$res['msg']='Tạo thành công !';
		return ACWView::template_admin('create.html',$res);
	}
	//public function()
}

