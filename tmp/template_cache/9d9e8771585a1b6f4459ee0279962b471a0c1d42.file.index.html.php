<?php /* Smarty version Smarty-3.1.14, created on 2017-06-25 23:42:07
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\fontend\template1\index.html" */ ?>
<?php /*%%SmartyHeaderCode:10297594a715fb17849-29460640%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9d9e8771585a1b6f4459ee0279962b471a0c1d42' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\fontend\\template1\\index.html',
      1 => 1498408923,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '10297594a715fb17849-29460640',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594a715fd8a5f7_88999301',
  'variables' => 
  array (
    'menus' => 0,
    'item' => 0,
    'sub1' => 0,
    'sub2' => 0,
    'slides' => 0,
    'key' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594a715fd8a5f7_88999301')) {function content_594a715fd8a5f7_88999301($_smarty_tpl) {?><html> 					<head> 						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 					<link href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_TEMPLATE'), ENT_QUOTES, 'UTF-8');?>
/css/bootstrap.min.css" rel="stylesheet" type="text/css"><link href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_TEMPLATE'), ENT_QUOTES, 'UTF-8');?>
/css/style.css" rel="stylesheet" type="text/css"><script type="text/javascript" src="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_TEMPLATE'), ENT_QUOTES, 'UTF-8');?>
/js/jquery.min.js"></script><script type="text/javascript" src="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_TEMPLATE'), ENT_QUOTES, 'UTF-8');?>
/js/bootstrap.min.js"></script></head> 					<body> 						<div class="row"> 							<div class="container" id="header"><div class="row" > 					  <img src="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
shared/template1/images/logo.png" />          		  </div><?php $_smarty_tpl->tpl_vars["menus"] = new Smarty_variable(Menu_model::get_menus(), null, 0);?> 			<div id="menu_top"> 			<ul class="dropDownMenu"> 			<?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['menus']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?>                                         <?php if ($_smarty_tpl->tpl_vars['item']->value['child_flg']>0){?> 				 <li><a href="<?php if (strlen($_smarty_tpl->tpl_vars['item']->value['link'])>0){?><?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['item']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?><?php }else{ ?>#<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a> 					<ul> 					<?php  $_smarty_tpl->tpl_vars['sub1'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sub1']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['item']->value['child']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sub1']->key => $_smarty_tpl->tpl_vars['sub1']->value){
$_smarty_tpl->tpl_vars['sub1']->_loop = true;
?>                     	<?php if ($_smarty_tpl->tpl_vars['sub1']->value['child_flg']>0){?>					 						<li><a href="<?php if (strlen($_smarty_tpl->tpl_vars['item']->value['link'])>0){?><?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?><?php }else{ ?>#<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a> 							<ul> 								<?php  $_smarty_tpl->tpl_vars['sub2'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sub2']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['sub1']->value['child']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sub2']->key => $_smarty_tpl->tpl_vars['sub2']->value){
$_smarty_tpl->tpl_vars['sub2']->_loop = true;
?> 									<li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['sub2']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub2']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub2']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a></li> 								<?php } ?> 							</ul> 						</li> 						<?php }else{ ?> 							<li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a></li> 						<?php }?> 					<?php } ?> 					</ul> 				 </li> 				<?php }else{ ?> 					 <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['item']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a></li> 				<?php }?> 			<?php } ?></ul></div></div> 						</div> 						<div class="row"><div class="container" id="content"><div id="myCarousel" class="carousel <!--slide-->" data-ride="carousel" data-interval="2500"> 					<?php $_smarty_tpl->tpl_vars["slides"] = new Smarty_variable(Slides_model::get_slides(), null, 0);?> 				    <!-- Indicators --> 				    <ol class="carousel-indicators"> 				      <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['slides']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?> 				      	  <li data-target="#myCarousel" data-slide-to="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['key']->value, ENT_QUOTES, 'UTF-8');?>
" <?php if ($_smarty_tpl->tpl_vars['key']->value==0){?>class="active"<?php }?>></li> 				      <?php } ?> 				    </ol>  				    <!-- Wrapper for slides --> 				    <div class="carousel-inner"> 				    	<?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['slides']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?> 					      <div class="item <?php if ($_smarty_tpl->tpl_vars['key']->value==0){?> active<?php }?>"> 					        <img src="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['img_path'], ENT_QUOTES, 'UTF-8');?>
" alt="" style="width:100%; height:400;"> 					      </div> 					    <?php } ?> 				    </div>  				    <!-- Left and right controls --> 				    <a class="left carousel-control" href="#myCarousel" data-slide="prev"> 				      <span class="glyphicon glyphicon-chevron-left"></span> 				      <span class="sr-only">Previous</span> 				    </a> 				    <a class="right carousel-control" href="#myCarousel" data-slide="next"> 				      <span class="glyphicon glyphicon-chevron-right"></span> 				      <span class="sr-only">Next</span> 				    </a> 				  </div><div class="row" id="section_1"><div class="col-md-9" id="section_1_col_1"></div><div class="col-md-3" id="section_1_col_2"><div class="model">  	               	 <div class="model_title">  	               	 	<h2><span>Sản phẩm</span></h2>  	               	 </div>                 	 </div><div class="model">  	               	 <div class="model_title">  	               	 	<h2><span>Thông Tin</span></h2>  	               	 </div>                 	 </div><div class="model">  	               	 <div class="model_title">  	               	 	<h2><span>Sản phẩm bán chạy</span></h2>  	               	 </div>                 	 </div></div></div></div></div> 						<div class="row"><div class="container" id="footer"><div class="col-md-4" id="footer_col_1"><div class="foot_model_title">                 	 	<h2><span>Danh mục</span></h2>                 	</div></div><div class="col-md-4" id="footer_col_2"><div class="foot_model_title">                 	 	<h2><span>Thông tin liên hệ</span></h2>                 	</div></div><div class="col-md-4" id="footer_col_3"><div class="foot_model_title">
               	 	<h2><span>Thống ke truy cập</span></h2>
               	</div></div></div></div> 					</body> 				</html><?php }} ?>