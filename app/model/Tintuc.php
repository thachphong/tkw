<?php

class Tintuc_model extends ACWModel
{		
		
	public static function action_index()
	{
		
	}
	public static function action_ds()
	{
		$param = self::get_param(array(
			'acw_url'
			,'page'
		));
		$model = new Tintuc_model();
		$info = $model->get_danhmuc_info($param['acw_url'][0]);
		//$param['ctg_name'] = $info['ctg_name'];
		$rows = $model->get_tintuc_byctgno($param['acw_url'][0],10);
		
		$db = new Danhmuc_model();
		$start_row = 0;
		if(isset($param['page']) && $param['page'] > 1){
			$start_row = $param['page']*PAGE_NEWS_LIMIT_RECORD;
		}else{
			$param['page'] = 1;
		}
								
		return ACWView::template('tintuclist.html', array(
			'tintucs' => $rows
			,'ctg_name' =>$info['ctg_name']
			,'ctg_no' =>$info['ctg_no']		
			,'total_page'=>3//round($db->get_total_rows($param['acw_url'][0])/PAGE_NEWS_LIMIT_RECORD)	
			,'page'=>$param['page']
		));
	}
	public function get_tintuc_byctgno($ctg_no,$limit = 1){
		$sql="select news_no,news_name,des,img_path from news  where del_flg =0
				and ctg_id in (select ctg_id from category where ctg_no = :ctg_no and del_flg = 0)
				limit $limit
				";
		return $this->query($sql,array('ctg_no'=>$ctg_no));
	}
	public static function get_sanpham_byctg($ctg_no){
		$db= new Sanpham_model();
		return $db->get_sanpham_byctgno($ctg_no,4);
	}
	public static function action_v()
	{
		$param = self::get_param(array(
			'acw_url'
		));
		$model = new Tintuc_model();
		$pro_no = $param['acw_url'][0];
		$rows = $model->get_tintuc_info($pro_no);		
		return ACWView::template('tintuc.html', array(
			'post' => $rows	
			//,'relates'=>$model->get_sanpham_lienquan($pro_no)	
		),FALSE);
	}
	public function get_tintuc_info($news_no){
		$sql=" select news_no,news_name,des,content from news  where del_flg =0
				and news_no = :news_no";
		$res = $this->query($sql ,array('news_no'=>$news_no));
		if(count($res)> 0){
			return $res[0];
		}
		return null;
	}
	public function get_sanpham_lienquan($pro_no){
		$sql="select pro_name,
			  pro_id,
			  pro_no
			  from product where del_flg = 0
			  and pro_no <>:pro_no 
			  /*and ctg_id in (
									select ctg_id
									from product 
									where del_flg = 0
									and pro_no = :pro_no
				)*/
				limit 6";
		$res = $this->query($sql ,array('pro_no'=>$pro_no));		
		return $res;
	}
	public function get_danhmuc_info($ctg_no){
		$sql ="select ctg_no,upper(ctg_name) ctg_name from category 
				where del_flg = 0 and ctg_no =:ctg_no
				";
		$res = $this->query($sql,array('ctg_no'=>$ctg_no));
		if(count($res) > 0){
			return $res[0];			
		}
		return NULL;
	}
}
