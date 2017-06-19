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
		$data['list'] = $db->get_structure(1);
		return ACWView::template_admin('template.html',$data);
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
	public function get_structure($template_id){
		$sql="select t.*,d.struct_val ,d.template_detail_id
				from structure  t
				LEFT JOIN template_detail d
				on d.struct_id = t.struct_id and d.template_id = :template_id
				order by sort";
		return $this->query($sql,array('template_id'=>$template_id));
	}
	public static function action_create()
	{
		$db = new Template_model();
		$data = $db->get_structure(1);
		$menu_style=array();
		foreach($data as $row){
			if($row['model']=='menu_top'){
				$menu_style[$row['struct_key']]= $row['struct_val'];
			}
		}
		$html = new Htmldom_lib();
		$html->create_basic_html(ACW_TEMPLATE_DIR.'/index.html');
		$html->add_menu($menu_style);
		$html->add_cssfile('<%$smarty.const.ACW_BASE_URL_TEMPLATE%>/css/bootstrap.css');	
		$html->add_cssfile('<%$smarty.const.ACW_BASE_URL_TEMPLATE%>/css/style.css');
		//$html->ad
		$res['msg']='Tạo thành công !';
		return ACWView::template_admin('index.html',$res);
	}
	//public function()
}

