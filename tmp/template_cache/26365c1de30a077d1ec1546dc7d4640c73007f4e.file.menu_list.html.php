<?php /* Smarty version Smarty-3.1.14, created on 2017-06-16 22:41:32
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\menu_list.html" */ ?>
<?php /*%%SmartyHeaderCode:60705943e2d5f0d627-18514442%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '26365c1de30a077d1ec1546dc7d4640c73007f4e' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\menu_list.html',
      1 => 1497627687,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '60705943e2d5f0d627-18514442',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5943e2d639b930_04200124',
  'variables' => 
  array (
    'level_flg' => 0,
    'parent_list1' => 0,
    'pa' => 0,
    'menus' => 0,
    'item' => 0,
    'parent_list2' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5943e2d639b930_04200124')) {function content_5943e2d639b930_04200124($_smarty_tpl) {?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admin! | </title>

    <?php echo $_smarty_tpl->getSubTemplate ('include/header.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

   
  </head>
  <?php $_smarty_tpl->tpl_vars['login_info'] = new Smarty_variable(ACWSession::get('user_info'), null, 0);?>
  <body class="nav-md">
  	<?php echo $_smarty_tpl->getSubTemplate ('include/pho_ajax.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

    <div class="container body">
      <div class="main_container">
        <?php echo $_smarty_tpl->getSubTemplate ('include/left.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>


        <!-- top navigation -->
        <div class="top_nav">
          <?php echo $_smarty_tpl->getSubTemplate ('include/menu.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main" style="min-height: 600px">
          <div class="">
            <!--<div class="page-title">
              <div class="title_left">
                <h3>Quản lý danh mục </h3>
              </div>

              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>-->

            <div class="clearfix"></div>

            <div class="row">              
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Danh sách menu<!--<small>Users</small>--></h2>
                    <ul class="nav navbar-rigth panel_toolbox" style="min-width: auto;">                      
                      <li><label style="margin: 5px 5px 0px 0;">Tìm</label>                        	
                      </li>                      
                      <li><input type="search" id="table_search" class="form-control input-sm" style="float: right;width: 88%">
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div class="row">
                    	<!--<div class="col-sm-2">
                    		<label>Menu cấp 1</label>
                    	</div>
                    	<div class="col-sm-3">                    		
                    		<select class="form-control">
                    			<option>fgsdgsd</option>
                    			<option>sgsdgsfgsd</option>
                    		</select>
                    	</div>-->
                    	<div class="col-sm-8">
                    	<ul class="nav navbar-left panel_toolbox" > 
                    	<?php if ($_smarty_tpl->tpl_vars['level_flg']->value>1){?>	
                    	  <li><label style="padding: 5px 10px  ">Menu cấp 1</label></li>                      
	                      <li><select class="form-control" id="level_1">
	                      		<option value=""></option>
	                      		<?php  $_smarty_tpl->tpl_vars['pa'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['pa']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['parent_list1']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['pa']->key => $_smarty_tpl->tpl_vars['pa']->value){
$_smarty_tpl->tpl_vars['pa']->_loop = true;
?>
	                      			<option value="<?php echo $_smarty_tpl->tpl_vars['pa']->value['menu_id'];?>
"><?php echo $_smarty_tpl->tpl_vars['pa']->value['menu_name'];?>
</option>
	                      		<?php } ?>
                    		</select>
	                      </li>
	                      <?php if ($_smarty_tpl->tpl_vars['level_flg']->value>2){?>	                     
	                      <li><label style="padding: 5px 10px ">Menu cấp 2</label></li>                      
	                      <li><select class="form-control" id="level_2">
	                    		<option value=""></option>	                      		
                    		</select>
	                      </li>
	                      <?php }?>
	                    <?php }?>
	                    </ul>
	                    </div>
                    	<div class="col-sm-4">
                    		
                    		<div class="dataTables_filter" style="margin-bottom: 10px">
                    			<button class="btn btn-primary" id="btn_new">Thêm mới</button>
                        	</div>                      	
                        </div>
                    </div>
					
                    <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th width="110px">Thứ tự hiển thị</th> 
                          <?php if ($_smarty_tpl->tpl_vars['level_flg']->value==2){?>
                          	  <th >Menu cấp 1</th>   	
                          <?php }elseif($_smarty_tpl->tpl_vars['level_flg']->value==3){?>
                          	  <th >Menu cấp 1</th>
                          	  <th >Menu cấp 2</th>
                          <?php }?>
                          <th >Tên menu</th>                                                                      
                          <th>Hiện</th>
                          <th>Sửa</th>   
                          <th>Xóa</th>                         
                        </tr>
                      </thead>
                      <tbody id="fbody">
                      <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['menus']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?>
                      	<tr>                          
                          <td ><?php echo $_smarty_tpl->tpl_vars['item']->value['sort'];?>
</td>
                          <?php if ($_smarty_tpl->tpl_vars['level_flg']->value==2){?>
                          	  <td><?php echo $_smarty_tpl->tpl_vars['item']->value['menu_name_1'];?>
</td> 	
                          <?php }elseif($_smarty_tpl->tpl_vars['level_flg']->value==3){?>
                          	  <td><?php echo $_smarty_tpl->tpl_vars['item']->value['menu_name_2'];?>
</td>
                          	<td><?php echo $_smarty_tpl->tpl_vars['item']->value['menu_name_1'];?>
</td>
                          <?php }?>      
                          <td id="name_<?php echo $_smarty_tpl->tpl_vars['item']->value['menu_id'];?>
"><?php echo $_smarty_tpl->tpl_vars['item']->value['menu_name'];?>
</td>                                            
                          <td>                          	
                          	<span class="fa <?php if ($_smarty_tpl->tpl_vars['item']->value['del_flg']==1){?>fa-square-o<?php }else{ ?>fa-check-square<?php }?>" style="font-size: 16px;"></span>                          	
                          </td>
                          <td>
                          	<button class="btn btn-warning btn-xs btn_edit" id="edit_<?php echo $_smarty_tpl->tpl_vars['item']->value['menu_id'];?>
">Sửa</button>
                          </td>
                          <td>
                          	<button class="btn btn btn-danger btn-xs btn_delete" id="del_<?php echo $_smarty_tpl->tpl_vars['item']->value['menu_id'];?>
">Xóa</button>
                          </td>
                        </tr>
                      <?php } ?>                        
                      </tbody>
                    </table>
                    </div>
					</div>
					
                  </div>
                </div>
              </div>
            	
            </div>
          </div>
        
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <?php echo $_smarty_tpl->getSubTemplate ('include/footer.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        <!-- /footer content -->
        
      </div>
    </div>
	
<script>
	$(document).ready(function() {
		var list_level2= '<?php if (isset($_smarty_tpl->tpl_vars['parent_list2']->value)){?><?php echo $_smarty_tpl->tpl_vars['parent_list2']->value;?>
<?php }?>';
		if(list_level2.length > 0){
			list_level2 = JSON.parse(list_level2);
		}
		
		var change_option_2= function(val){
			var str_op = '<option value=""></option>';
			//console.log(val);
			//console.log(list_level2);
			for(i=0;i<list_level2.length;i++){
				console.log(list_level2[i].parent_id);
				if(val == list_level2[i].parent_id){
					str_op += '<option value="'+list_level2[i].menu_id+'">'+list_level2[i].menu_name+'</option>';
				}
			};
			//console.log(str_op);
			$('#level_2').empty();
			$('#level_2').append(str_op);
		};
	                      		
		$(document).off('click','#btn_new'); 
        $(document).on('click','#btn_new',function(event){
        	Pho_html_ajax('POST',"<?php echo @constant('ACW_BASE_URL');?>
menu/new" ,{'menu_level':'<?php echo $_smarty_tpl->tpl_vars['level_flg']->value;?>
'},function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Thêm Menu",600);
            });
        	
        });
        $(document).off('click','.dialog_close'); 
        $(document).on('click','.dialog_close',function(event){        	
			Pho_modal_close("modal1");
        });
        $(document).off('click','#btn_save'); 
        $(document).on('click','#btn_save',function(event){
        	var arr = $('#form_ctg').serializeArray();	
			Pho_json_ajax('POST',"<?php echo @constant('ACW_BASE_URL');?>
menu/update" ,arr,function(datas){
				if(datas.status =="OK"){
					Pho_modal_close("modal1");
					//Pho_message_box("Thông báo",datas.msg);
					Pho_direct("<?php echo @constant('ACW_BASE_URL');?>
menu/list/<?php echo $_smarty_tpl->tpl_vars['level_flg']->value;?>
");
				}else{
					Pho_message_box_error("Lỗi",datas.msg);
				}
                
            });
        });
        $(document).off('click','.btn_delete'); 
        $(document).on('click','.btn_delete',function(event){
        	var id = $(this).attr('id');
	        	id = id.replace("del_","");
	        var menu_name = $('#name_'+id).text();
        	Pho_message_confirm("Thông báo","Bạn có chắc chắn muốn xóa menu: ["+menu_name+"] ?",function(){
        		
				Pho_json_ajax('GET',"<?php echo @constant('ACW_BASE_URL');?>
menu/delete/" + id,null ,function(datas){
					if(datas.status == "OK"){
						//Pho_modal_close("modal1");
						//Pho_message_box("Thông báo",datas.msg);
						//location.href="<?php echo @constant('ACW_BASE_URL');?>
menu";
						Pho_direct("<?php echo @constant('ACW_BASE_URL');?>
menu/list/<?php echo $_smarty_tpl->tpl_vars['level_flg']->value;?>
");
					}else{
						Pho_message_box_error("Lỗi",datas.msg);
					}
	                
	            });
        	});
        	
        });
        $(document).off('click','.btn_edit'); 
        $(document).on('click','.btn_edit',function(event){
        	var id = $(this).attr('id');
	        	id = id.replace("edit_","");			
            	Pho_html_ajax('GET',"<?php echo @constant('ACW_BASE_URL');?>
menu/edit/"+ id ,null,function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Sửa Menu",600);
            });
        });
        $(document).off('click','.add_child'); 
        $(document).on('click','.add_child',function(event){
        	var id = $(this).attr('id');
	        	id = id.replace("add_","");			
            Pho_html_ajax('GET',"<?php echo @constant('ACW_BASE_URL');?>
menu/addchild/"+ id ,null,function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Thêm Menu",600);
            });
        });
        
        $("#table_search").keyup(function(){	
	          find_table(this.value);
	      });
	    		
	 	$(document).off('change','#level_1'); 
        $(document).on('change','#level_1',function(event){
        	var val = $("#level_1 option:selected").text();
        	//alert(val);
        	//console.log($(this).val());
        	change_option_2($(this).val());
        	find_table(val);
        	
        });
        $(document).off('change','#level_2'); 
        $(document).on('change','#level_2',function(event){
        	var val = $("#level_1 option:selected").text();
        	var val_2 = $("#level_2 option:selected").text();
        	find_table(val);
        	find_table_2(val_2);        	
        });
		function find_table(str_val){
			$("#fbody").find("tr").hide();

			//split the current value of searchInput
	          var data = str_val.split(" ");
			//create a jquery object of the rows
	          var jo = $("#fbody").find("tr");	          
			//Recusively filter the jquery object to get results.
	          $.each(data, function(i, v){
	              jo = jo.filter("*:contains('"+v+"')");
	          });
	        //show the rows that match.
	          jo.show();
		} 
		function find_table_2(str_val){
			var jo = $("#fbody").find("tr:visible");
			$("#fbody").find("tr").hide();
	        var data = str_val.split(" ");
	        $.each(data, function(i, v){
	           jo = jo.filter("*:contains('"+v+"')");
	        });	        
	        jo.show();
		} 
        
    });
</script>
     
    
	
</body>
</html>
<?php }} ?>