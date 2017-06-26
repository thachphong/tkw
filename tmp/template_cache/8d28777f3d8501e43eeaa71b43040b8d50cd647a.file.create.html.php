<?php /* Smarty version Smarty-3.1.14, created on 2017-06-24 11:13:47
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\create.html" */ ?>
<?php /*%%SmartyHeaderCode:1434594de6fb612084-27192474%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8d28777f3d8501e43eeaa71b43040b8d50cd647a' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\create.html',
      1 => 1497546225,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1434594de6fb612084-27192474',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'msg' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594de6fbd60ba9_67637711',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594de6fbd60ba9_67637711')) {function content_594de6fbd60ba9_67637711($_smarty_tpl) {?><!DOCTYPE html>
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
            <div class="clearfix"></div>

            <div class="row">              
			  <div class="col-md-12 col-sm-12 col-xs-12">   
			  	  <p><strong><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['msg']->value, ENT_QUOTES, 'UTF-8');?>
</strong></p>            
              </div>
            </div>
         </div>
            	
        </div>
    </div>
        
        </div>
        <!-- /page content -->
		<p><strong><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['msg']->value, ENT_QUOTES, 'UTF-8');?>
</strong></p>
        <!-- footer content -->
        <?php echo $_smarty_tpl->getSubTemplate ('include/footer.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        <!-- /footer content -->
        
      </div>
    </div>
	

     
    
	
</body>
</html>
<?php }} ?>