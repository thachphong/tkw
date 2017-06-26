<?php /* Smarty version Smarty-3.1.14, created on 2017-06-16 20:53:17
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\define.html" */ ?>
<?php /*%%SmartyHeaderCode:233615943e2cd292526-06171463%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd20976e226f47527f498b4f771bb31c21cf28951' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\define.html',
      1 => 1497081108,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '233615943e2cd292526-06171463',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'define_name' => 0,
    'define_val' => 0,
    'define_key' => 0,
    'define_id' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5943e2cd5eb9a3_02074943',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5943e2cd5eb9a3_02074943')) {function content_5943e2cd5eb9a3_02074943($_smarty_tpl) {?><!DOCTYPE html>
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
                    <h2><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_name']->value, ENT_QUOTES, 'UTF-8');?>
</h2>
                    <ul class="nav navbar-rigth panel_toolbox" style="min-width: auto;">
                      
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  	<div class="x_content">
                    <div class="row">
                    	<div class="col-sm-6">
                    	</div>
                    	
                    </div>
						<form id="form_define" action="" class="form-horizontal form-label-left" enctype="multipart/form-data">     
							<div class="form-group">
		                        <label class="control-label col-md-2 col-sm-2 col-xs-12" ><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_name']->value, ENT_QUOTES, 'UTF-8');?>
<span class="required">*</span>
		                        </label>
		                        <div class="col-md-6 col-sm-4 col-xs-12">
		                          <input type="text" required="required" name="define_val" id="define_val" class="form-control col-md-7 col-xs-12" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_val']->value, ENT_QUOTES, 'UTF-8');?>
" alt="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_name']->value, ENT_QUOTES, 'UTF-8');?>
">                          
		                          <input type="hidden" name="define_key" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_key']->value, ENT_QUOTES, 'UTF-8');?>
">
		                          <input type="hidden" name="define_name" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_name']->value, ENT_QUOTES, 'UTF-8');?>
">
		                          <input type="hidden" name="define_id" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['define_id']->value, ENT_QUOTES, 'UTF-8');?>
">                  
		                        </div>
		                        <div class="col-md-4 col-sm-4 col-xs-12">
		                        	<input type="button" value="Cập nhật" class="btn btn-success" id="btn_save">
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
        <!-- /page content -->
		
        <!-- footer content -->
        <?php echo $_smarty_tpl->getSubTemplate ('include/footer.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        <!-- /footer content -->
        
      </div>
    </div>
	
<script>
	$(document).ready(function() {
		
		$(document).off('click','#btn_save'); 
        $(document).on('click','#btn_save',function(event){
        	//$('#form_define').checkValidity();
        	var msg = check_validate_update();
        	if(msg !=""){
        		Pho_message_box_error("Lỗi",msg);
        		return;
        	}
        	var arr = $('#form_define').serializeArray();
        	
			Pho_json_ajax('POST',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
define/update" ,arr,function(datas){
				if(datas.status =="OK"){					
					Pho_message_box("Thông báo",datas.msg);					
				}else{
					Pho_message_box_error("Lỗi",datas.msg);
				}
                
            });
        });
		var check_validate_update = function(){
			
        	if($('#define_val').val()==''){
        		return "Bạn chưa nhập "+$('#define_val').attr('alt')+" !";
        	}
        	
        	return "";
        };
	 	

        
    });
</script>
     
    
	
</body>
</html>
<?php }} ?>