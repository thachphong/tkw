<?php /* Smarty version Smarty-3.1.14, created on 2017-06-16 20:41:00
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\login.html" */ ?>
<?php /*%%SmartyHeaderCode:122475943dfeca27657-12783952%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '47901ec2dfad4fe59d62e0ddf09ae5fad0d15dc4' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\login.html',
      1 => 1494944046,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '122475943dfeca27657-12783952',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'lang' => 0,
    'acw_error' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5943dfeded79b3_70667542',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5943dfeded79b3_70667542')) {function content_5943dfeded79b3_70667542($_smarty_tpl) {?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<?php $_smarty_tpl->tpl_vars['lang'] = new Smarty_variable(Message_model::get_message('LOGIN'), null, 0);?>
    <title><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang']->value['LOG006'], ENT_QUOTES, 'UTF-8');?>
 </title>

    <?php echo $_smarty_tpl->getSubTemplate ('include/header.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

    
  </head>

  <body class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form id="from_update" action="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
login/authadmin" method="post" enctype="multipart/form-data">
            
              <h1><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang']->value['LOG006'], ENT_QUOTES, 'UTF-8');?>
</h1>
              <div>
                <input type="text" class="form-control" name="user_id" placeholder="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang']->value['LOG002'], ENT_QUOTES, 'UTF-8');?>
" required="" />
              </div>
              <div>
                <input type="password" class="form-control" name="passwd" placeholder="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang']->value['LOG003'], ENT_QUOTES, 'UTF-8');?>
" required="" />
              </div>
              <div>
                <!--<a class="btn btn-default submit" href="authadmin" id="login_form"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang']->value['LOG006'], ENT_QUOTES, 'UTF-8');?>
</a>-->
                <input class="btn btn-default submit" type="submit" id="login_form" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['lang']->value['LOG006'], ENT_QUOTES, 'UTF-8');?>
" style="float: none"/>
                <!--<a class="reset_pass" href="#">Lost your password?</a>-->
              </div>
				
              <div class="clearfix"></div>
				<?php if (count($_smarty_tpl->tpl_vars['acw_error']->value)>0){?><?php if (isset($_smarty_tpl->tpl_vars['acw_error']->value['ip'])){?><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['acw_error']->value['ip'], ENT_QUOTES, 'UTF-8');?>
<?php }else{ ?><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['acw_error']->value['message'], ENT_QUOTES, 'UTF-8');?>
<?php }?><?php }?>
              <!--<div class="separator">
                <p class="change_link">New to site?
                  <a href="#signup" class="to_register"> Create Account </a>
                </p>

                <div class="clearfix"></div>
                <br />-->

                <!--<div>
                  <h1><i class="fa fa-paw"></i> Admin!</h1>
                  <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                </div>-->
              </div>
            </form>
          </section>
        </div>

        <div id="register" class="animate form registration_form">
          <section class="login_content">
            <form>
              <h1>Create Account</h1>
              <div>
                <input type="text" class="form-control" placeholder="Username" required="" />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="Email" required="" />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Password" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="login/authoradmin" style="float: none">Submit</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">Already a member ?
                  <a href="#signin" class="to_register"> Log in </a>
                </p>

                <div class="clearfix"></div>
                <br />

                <div>
                  <h1><i class="fa fa-paw"></i> Gentelella Alela!</h1>
                  <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
   
  </body>
</html>
<?php }} ?>