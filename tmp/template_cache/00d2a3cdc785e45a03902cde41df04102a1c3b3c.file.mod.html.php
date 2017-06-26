<?php /* Smarty version Smarty-3.1.14, created on 2017-06-24 18:47:21
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\template_module\mod.html" */ ?>
<?php /*%%SmartyHeaderCode:7201594e514953a4c9-42353374%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '00d2a3cdc785e45a03902cde41df04102a1c3b3c' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\template_module\\mod.html',
      1 => 1498304755,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7201594e514953a4c9-42353374',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'module' => 0,
    'parent_list2' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594e5149610e37_16322310',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594e5149610e37_16322310')) {function content_594e5149610e37_16322310($_smarty_tpl) {?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admin! | </title>

    <?php echo $_smarty_tpl->getSubTemplate ('include/header.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

    <style>
    	.title_small{
    		background: rgba(5, 157, 129, 0.42);
    		color: #000;
    	}
    </style>
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
            <div class="clearfix"></div>

            <div class="row">              
			  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Thiết lập template</h2>
                    <!--<ul class="nav navbar-rigth panel_toolbox" style="min-width: auto;">                      
                      <li><label style="margin: 5px 5px 0px 0;">Tìm</label>                        	
                      </li>                      
                      <li><input type="search" id="table_search" class="form-control input-sm" style="float: right;width: 88%">
                      </li>
                    </ul>-->
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">                    
					 <div class="row">
					 	<div class="col-md-12 col-sm-12 col-xs-12">
					 	<form id="form_setting" action="" class="form-horizontal form-label-left" enctype="multipart/form-data">
					 		 <!--module -->
					 		 <?php $_smarty_tpl->tpl_vars['module_name'] = new Smarty_variable('Module', null, 0);?> 
					 		 <?php $_smarty_tpl->tpl_vars['data_list'] = new Smarty_variable($_smarty_tpl->tpl_vars['module']->value, null, 0);?> 
	                    	 <?php echo $_smarty_tpl->getSubTemplate ('template/module.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

	                    	 <!--end module -->	                    	 
                        	<div class="form-group">
		                        <div class="col-md-12 col-sm-12" style="text-align: center">
		                          <!--<a class="dialog_close btn btn-primary" href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template">Thoát</a>-->
		                          <a class="btn btn-success" id="btn_save" >Cập nhật</a>
		                        </div>
		                      </div>
                    	</form>
                    	</div>
                    </div>
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
		var list_level2= '<?php if (isset($_smarty_tpl->tpl_vars['parent_list2']->value)){?><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['parent_list2']->value, ENT_QUOTES, 'UTF-8');?>
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
        	Pho_html_ajax('POST',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu/new" ,{'silde_id':''},function(html){
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
        
        $(document).off('click','#btn_save'); 
        $(document).on('click','#btn_save',function(event){
        	var arr = $('#form_setting').serializeArray();	
			Pho_json_ajax('POST',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template/update" ,arr,function(datas){
				if(datas.status =="OK"){
					//Pho_modal_close("modal1");
					Pho_message_box("Thông báo",datas.msg);
					//Pho_direct("<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template");
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
        		
				Pho_json_ajax('GET',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu/delete/" + id,null ,function(datas){
					if(datas.status == "OK"){
						//Pho_modal_close("modal1");
						//Pho_message_box("Thông báo",datas.msg);
						//location.href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu";
						Pho_direct("<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu");
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
            Pho_html_ajax('GET',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
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