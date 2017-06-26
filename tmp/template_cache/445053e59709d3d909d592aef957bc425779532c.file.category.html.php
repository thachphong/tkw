<?php /* Smarty version Smarty-3.1.14, created on 2017-06-24 10:28:20
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\category.html" */ ?>
<?php /*%%SmartyHeaderCode:31667594ddc544391b6-63887640%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '445053e59709d3d909d592aef957bc425779532c' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\category.html',
      1 => 1494867797,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '31667594ddc544391b6-63887640',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'category' => 0,
    'key' => 0,
    'item' => 0,
    'news_flg' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594ddc54758a85_43063752',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594ddc54758a85_43063752')) {function content_594ddc54758a85_43063752($_smarty_tpl) {?><!DOCTYPE html>
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
                    <h2>Danh sách danh mục <!--<small>Users</small>--></h2>
                    <ul class="nav navbar-rigth panel_toolbox" style="min-width: auto;">
                      <li><button class="btn btn-primary" id="btn_new">Thêm mới</button></li>
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>                      
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div class="row">
                    	<div class="col-sm-6">
                    	</div>
                    	<div class="col-sm-6">
                    		
                    		<div class="dataTables_filter" style="margin-bottom: 10px">
                    		<label style="margin: 5px 5px 0px 0;">Tìm</label>
                        	<input type="search" id="table_search" class="form-control input-sm" style="float: right;width: 88%">
                        	</div>                      	
                        </div>
                    </div>
					
                    <!--<table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">-->
                    <div class="row">
                    	<div class="col-sm-12">
                    <table id="datatable-fixed-header" class="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th colspan="3">Tên Danh mục</th>
                          <th>Thêm danh mục con</th>                       
                          <th>Hiện</th>
                          <th>Sửa</th>   
                          <th>Xóa</th>                         
                        </tr>
                      </thead>
                      <tbody id="fbody">
                      <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['category']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?>
                      	<tr>
                          <td><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['key']->value+1, ENT_QUOTES, 'UTF-8');?>
</td>
                          <?php if ($_smarty_tpl->tpl_vars['item']->value['ctg_level']==1){?>
                          	<td colspan="3"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['ctg_name'], ENT_QUOTES, 'UTF-8');?>
</td>
                          <?php }elseif($_smarty_tpl->tpl_vars['item']->value['ctg_level']==2){?>
                          	<td></td>
                          	<td colspan="2"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['ctg_name'], ENT_QUOTES, 'UTF-8');?>
</td>
                          <?php }else{ ?>
                          	<td></td>
                          	<td></td>
                          	<td ><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['ctg_name'], ENT_QUOTES, 'UTF-8');?>
</td>
                          <?php }?>
                           
                          <td>
                          	<?php if ($_smarty_tpl->tpl_vars['item']->value['ctg_level']!=3){?>
                          	<button class="btn btn-info btn-xs add_child" id="add_<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['ctg_id'], ENT_QUOTES, 'UTF-8');?>
">Thêm danh mục con</button>
                          	<?php }?>
                          </td>                         
                          <td>
                          	
                          	<span class="fa <?php if ($_smarty_tpl->tpl_vars['item']->value['del_flg']==1){?>fa-square-o<?php }else{ ?>fa-check-square<?php }?>" style="font-size: 16px;"></span>
                          	
                          </td>
                          <td>
                          	<button class="btn btn-warning btn-xs btn_edit" id="edit_<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['ctg_id'], ENT_QUOTES, 'UTF-8');?>
">Sửa</button>
                          </td>
                          <td>
                          	<button class="btn btn btn-danger btn-xs btn_delete" id="del_<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['ctg_id'], ENT_QUOTES, 'UTF-8');?>
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
		var news_flg ="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['news_flg']->value, ENT_QUOTES, 'UTF-8');?>
";
		var action ="";
		if(news_flg ==1){
			action ="/ctgnews";
		}
		$(document).off('click','#btn_new'); 
        $(document).on('click','#btn_new',function(event){
        	Pho_html_ajax('POST',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category/new" ,{'ctg_id':'','news_flg':news_flg},function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Thêm Danh mục",600);
            });
        	
        });
        $(document).off('click','.dialog_close'); 
        $(document).on('click','.dialog_close',function(event){        	
			Pho_modal_close("modal1");
        });
        $(document).off('click','#btn_save'); 
        $(document).on('click','#btn_save',function(event){
        	var arr = $('#form_ctg').serializeArray();	
			Pho_json_ajax('POST',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category/update" ,arr,function(datas){
				if(datas.status =="OK"){
					Pho_modal_close("modal1");
					//Pho_message_box("Thông báo",datas.msg);
					Pho_direct("<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category" +action);
				}else{
					Pho_message_box_error("Lỗi",datas.msg);
				}
                
            });
        });
        $(document).off('click','.btn_delete'); 
        $(document).on('click','.btn_delete',function(event){
        	var id = $(this).attr('id');
	        	id = id.replace("del_","");
        	Pho_message_confirm("Thông báo","Bạn có chắc chắn muốn xóa danh mục này ?",function(){
        		
				Pho_json_ajax('GET',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category/delete/" + id,null ,function(datas){
					if(datas.status == "OK"){
						//Pho_modal_close("modal1");
						//Pho_message_box("Thông báo",datas.msg);
						location.href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category"+action;
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
            Pho_html_ajax('GET',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category/edit/"+ id ,null,function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Sửa Danh mục",700);
            });
        });
        $(document).off('click','.add_child'); 
        $(document).on('click','.add_child',function(event){
        	var id = $(this).attr('id');
	        	id = id.replace("add_","");			
            Pho_html_ajax('GET',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category/addchild/"+ id ,null,function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Thêm Danh mục",600);
            });
        });
        
        $("#table_search").keyup(function(){
		//hide all the rows
			//alert('sss');
	          $("#fbody").find("tr").hide();

		//split the current value of searchInput
	          var data = this.value.split(" ");
		//create a jquery object of the rows
	          var jo = $("#fbody").find("tr");
	          
		//Recusively filter the jquery object to get results.
	          $.each(data, function(i, v){
	              jo = jo.filter("*:contains('"+v+"')");
	          });
	        //show the rows that match.
	          jo.show();
	     //Removes the placeholder text  
	   
	      }).focus(function(){
	          this.value="";
	          $(this).css({"color":"black"});
	          $(this).unbind('focus');
	      }).css({"color":"#C0C0C0"});

	 

        
    });
</script>
     
    
	
</body>
</html>
<?php }} ?>