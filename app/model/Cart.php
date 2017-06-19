<?php

class Cart_model extends ACWModel
{
	
	public static function init()
	{
		//Login_model::check();	
	}
	
	public static function action_index()
	{		
		$db = new Cart_model();
		$cart = ACWSession::get("cart_info");
		$products = array();
		$total_amount = 0;
		if($cart != NULL){
			$products = $db->get_products($cart);			
			foreach($products as &$item){
				$item['qty'] = $cart[$item['pro_id']];
				$item['amount'] = $item['qty']*$item['price_new'];
				$total_amount += $item['amount'];
			}
		}
		
		return ACWView::template('cart.html',array(
			'carts' =>$products
			,'total_amount'=>$total_amount
		));
	}
	public static function action_success()
	{	
		return ACWView::template('success.html');
	}
	public static function action_add(){
		$param = self::get_param(array(
			'pro_id',
			'quantity'
		));
		$cart = ACWSession::get("cart_info");
		if($cart != NULL){
			if(isset($cart[$param['pro_id']])){
				$cart[$param['pro_id']] = $cart[$param['pro_id']] + $param['quantity'];
			}
		}
		$cart[$param['pro_id']] =  $param['quantity'];
		ACWSession::set("cart_info",$cart);
		return ACWView::redirect(ACW_BASE_URL . 'cart');
	}
	public static function action_pay(){
		$param = self::get_param(array(
			'pro_id',
			'quantity'
		));
		$db = new Cart_model();
		$cart = array();//ACWSession::get("cart_info");
		foreach($param['pro_id'] as $key=>$val){
			$cart[$val] = $param['quantity'][$key];
		}
		/*if($cart != NULL){
			if(isset($cart[$param['pro_id']])){
				$cart[$param['pro_id']] = $cart[$param['pro_id']] + $param['quantity'];
			}
		}*/
		//$cart[$param['pro_id']] =  $param['quantity'];
		ACWSession::set("cart_info",$cart);
		ACWLog::debug_var('cart',$cart);
		$products = $db->get_products($cart);
		$total_amount = 0;
		foreach($products as &$item){
			$item['qty'] = $cart[$item['pro_id']];
			$item['amount'] = $item['qty']*$item['price_new'];
			$total_amount += $item['amount'];
		}
		return ACWView::template('payment.html',array(
			'carts' =>$products
			,'total_amount'=>$total_amount
		));
	}
	public static function action_update(){
		$param = self::get_param(array(
			'full_name',
			'phone',
			'email',
			'address',
			'note'
			//'total_amount'
		));
		$cart = ACWSession::get("cart_info");
		$db = new Cart_model();
		$products = $db->get_products($cart);
		$total_amount = 0;
		foreach($products as &$item){
			$item['qty'] = $cart[$item['pro_id']];
			$item['amount'] = $item['qty']*$item['price_new'];
			$total_amount += $item['amount'];
		}
		$param['total_amount']=$total_amount;
		
		$ord_id = $db->insert_order($param);
		$db->insert_order_detail($ord_id,$products);
		$db->sendmail($param,$products);
			
		ACWSession::set("cart_info",NULL);
		return ACWView::redirect(ACW_BASE_URL . 'cart/success');
	}
	public function get_products($cart){
		$listid = array_keys($cart);
		
		$sql ="select p.pro_id,p.pro_no,p.pro_name,im.img_thumb,p.price_new,p.price_old
				from product p
				INNER JOIN product_img im on im.pro_id = p.pro_id and im.avata_flg = 1
				where p.pro_id in (".implode(',',$listid).")";
		return $this->query($sql);
	}
	public function insert_order($param){
		$this->begin_transaction();
		$sql=" insert into orders(
					ord_date
					,full_name
					,email
					,phone
					,address
					,note
					,total_amount
					)
				values(
					now()
					,:full_name
					,:email
					,:phone
					,:address
					,:note
					,:total_amount
				)";
		$sql_pa = ACWArray::filter($param, array(
					'full_name'
					,'email'
					,'phone'
					,'address'
					,'note'
					,'total_amount'));
		$this->execute($sql,$sql_pa);
		$result = $this->query("SELECT LAST_INSERT_ID() AS ord_id");			
		$new_id = $result[0]['ord_id'];
		$this->commit();
		return $new_id;
	}
	public function insert_order_detail($ord_id,$param){
		$sql=" insert into orders_detail(
					ord_id
					,pro_id
					,price
					,qty
					,total
					)					
				values(
					:ord_id
					,:pro_id
					,:price
					,:qty
					,:total
				)";		
		$sql_pa['ord_id']=$ord_id;
		foreach($param as $item){
			$sql_pa['pro_id']= $item['pro_id'];
			$sql_pa['price']= $item['price_new'];
			$sql_pa['qty']= $item['qty'];
			$sql_pa['total']= $item['amount'];
			$this->execute($sql,$sql_pa);
		}
		return TRUE;
	}
	public function sendmail($param,$cart){
		$email = new Mail_lib();
		
		$body_tmp = $this->get_body($param,$cart);		
		$replacements['HEADER'] = '<h2><strong>Thông tin đặt hàng </strong></h2>';
		$replacements['BODY'] = $body_tmp;
		$db = new Define_model();
		$data = $db->get_define(DEFINE_KEY_EMAIL);
		$mail_to[]['mail_address']= $data['define_val'];	
			
		$email->AddListAddress($mail_to);
                
		$email->Subject = 'Thông tin đặt hàng - '.date('d/m/Y H:i:s');                
		$email->loadbody('template_mail.html');
		$email->replaceBody($replacements);
		$result = $email->send();
	}
	public function get_body($param,$cart){
		$html="<h3>Thông tin khách hàng</h3><table>";
		
		if(strlen($param['full_name']) > 0){
			$html .= "<tr><td><strong>Họ tên: </strong></td><td>".$param['full_name']."</td></tr>"."\r\n";
		} 
		if(strlen($param['email']) > 0){
			$html .= "<tr><td><strong>Email: </strong></td><td>".$param['email']."</td></tr>"."\r\n";
		}
		if(strlen($param['phone']) > 0){
			$html .= "<tr><td><strong>Điện thoại: </strong></td><td>".$param['phone']."</td></tr>"."\r\n";
		}
		if(strlen($param['address']) > 0){
			$html .= "<tr><td><strong>Địa chỉ: </strong></td><td>".$param['address']."</td></tr>"."\r\n";
		}
		if(strlen($param['note']) > 0){
			$html .= "<tr><td><strong>Ghi chú: </strong></td><td>".$param['note']."</td></tr>"."\r\n";
		}
		$html .="</table>";

		$html .="<h3>Thông tin đơn hàng</h3><table style=\"border-collapse: collapse;\">";
		$html .= "<tr><td style=\"border: 1px solid #d7dbdb;padding:10px;\">STT</td>
				  <td style=\"border: 1px solid #d7dbdb;padding:10px;\">Tên hàng</td>
				  <td style=\"border: 1px solid #d7dbdb;padding:10px;\">Giá</td>
				  <td style=\"border: 1px solid #d7dbdb;padding:10px;\">Số lượng</td>
				  <td style=\"border: 1px solid #d7dbdb;padding:10px;\">Thành tiền</td>
				  </tr>";
		foreach($cart as $key=>$item){			
			$html .= "<tr><td style=\"border: 1px solid #d7dbdb;padding:5px;\">".($key+1)."</td>
			<td style=\"border: 1px solid #d7dbdb;padding:10px;\">".$item['pro_name']."</td>
			<td style=\"border: 1px solid #d7dbdb;padding:10px;\">".self::currency_format($item['price_new'])." VNĐ</td>
			<td style=\"border: 1px solid #d7dbdb;padding:10px;\">".self::currency_format($item['qty'])."</td>
			<td style=\"border: 1px solid #d7dbdb;padding:10px;\">".self::currency_format($item['amount'])." VNĐ</td></tr>";
		}
		$html .='<tr><td colspan="4" style="border: 1px solid #d7dbdb;padding:10px;">Tổng tiền</td>
		<td style="border: 1px solid #d7dbdb;padding:10px;">'.self::currency_format($param['total_amount']).' VNĐ</td></tr>';
		$html .="</table>";
		return $html;
	}
}
