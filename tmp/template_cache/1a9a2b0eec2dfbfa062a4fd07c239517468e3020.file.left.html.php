<?php /* Smarty version Smarty-3.1.14, created on 2017-06-25 11:39:47
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\include\left.html" */ ?>
<?php /*%%SmartyHeaderCode:143305943e010554c96-07401113%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1a9a2b0eec2dfbfa062a4fd07c239517468e3020' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\include\\left.html',
      1 => 1498365547,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '143305943e010554c96-07401113',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5943e0106433c6_17741034',
  'variables' => 
  array (
    'login_info' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5943e0106433c6_17741034')) {function content_5943e0106433c6_17741034($_smarty_tpl) {?>        <?php $_smarty_tpl->tpl_vars['login_info'] = new Smarty_variable(ACWSession::get('user_info'), null, 0);?>
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title" style="background: #172d44"><i class="fa fa-paw"></i> <span>Admin tool!</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <!--<div class="profile clearfix">
              <div class="profile_pic">
                <img src="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_BACKEND'), ENT_QUOTES, 'UTF-8');?>
/images/user.png" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome,</span>
                <h2><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['login_info']->value['user_name'], ENT_QUOTES, 'UTF-8');?>
</h2>
              </div>
            </div>-->
            <!-- /menu profile quick info -->
       

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <!--<h3>General</h3>-->
                <ul class="nav side-menu">
                  <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
" target="_blank"><i class="fa fa-home"></i> Xem website <span class="fa"></span></a>
                    <!--<ul class="nav child_menu">
                      <li><a href="index.html">Dashboard</a></li>
                      <li><a href="index2.html">Dashboard2</a></li>
                      <li><a href="index3.html">Dashboard3</a></li>
                    </ul>-->
                  </li>
                  <li><a ><i class="fa fa-bars"></i> Menu <span class="fa fa-chevron-down"></span></a>
                  	  <ul class="nav child_menu">
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu/list/1">Memu cấp 1</a></li>
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu/list/2">Memu cấp 2</a></li>
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
menu/list/3">Memu cấp 3</a></li>	                      
                      </ul>	
                  </li>                  
                  <li><a ><i class="fa fa-cube"></i>Danh mục - Sản Phẩm <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category">Danh mục cấp 1</a></li>
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category">Danh mục cấp 2</a></li>
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
product">Sản phẩm</a></li>                      
                    </ul>
                  </li>
                  <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
page"><i class="fa fa-file-powerpoint-o"></i> Trang <span class="fa"></span></a></li>
                  <li><a><i class="fa fa-newspaper-o"></i> Tin tức <span class="fa fa-chevron-down"></span></a>
                  	<ul class="nav child_menu">
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
category/ctgnews">Danh mục tin </a></li>
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
news">Tin tức</a></li>
                    </ul>
                  </li>
                  <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
user"><i class="fa fa-group"></i> Tài khoản <span class="fa"></span></a></li>                  
                  <li><a><i class="fa fa-gear"></i> Cài đặt <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <!--<li><a href="tables.html">Banner</a></li>-->
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
slides">Slide</a></li>
                      <!--<li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
define/logo">Logo</a></li>-->
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
define/email">Email nhận thông báo</a></li>
                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
define/fanpage">Fan page</a></li>
                      <!--<li><a href="tables_dynamic.html">Message</a></li>-->
                    </ul>
                  </li>
                  <li><a ><i class="fa fa-gears"></i> Template <span class="fa fa-chevron-down"></span></a>
                  	  <ul class="nav child_menu">
                  	  	  <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template/list">Template </a></li>	                     
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template">Template general</a></li>
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template/mod">Template module</a></li>
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
templatecontent">Template content</a></li>	                
	                      <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template/create">Create</a></li>
                      </ul> 	
                  </li>
                  
                </ul>
              </div>
            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

       
<?php }} ?>