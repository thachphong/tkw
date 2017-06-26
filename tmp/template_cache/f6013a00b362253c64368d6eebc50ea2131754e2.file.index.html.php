<?php /* Smarty version Smarty-3.1.14, created on 2017-06-16 20:50:45
         compiled from "index.html" */ ?>
<?php /*%%SmartyHeaderCode:56465943e235a47596-80401010%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f6013a00b362253c64368d6eebc50ea2131754e2' => 
    array (
      0 => 'index.html',
      1 => 1497548711,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '56465943e235a47596-80401010',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'menus' => 0,
    'item' => 0,
    'sub1' => 0,
    'sub2' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5943e235e0ac55_96270627',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5943e235e0ac55_96270627')) {function content_5943e235e0ac55_96270627($_smarty_tpl) {?><html> 					<head> 						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 					<link href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_TEMPLATE'), ENT_QUOTES, 'UTF-8');?>
/css/bootstrap.css" rel="stylesheet" type="text/css"><link href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL_TEMPLATE'), ENT_QUOTES, 'UTF-8');?>
/css/style.css" rel="stylesheet" type="text/css"></head> 					<body> 						<div class="row"> 							<div class="container" id="header"><?php $_smarty_tpl->tpl_vars["menus"] = new Smarty_variable(Menu_model::get_menus(), null, 0);?>
			<div id="menu_top">
			<ul class="dropDownMenu">
			<?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['menus']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?>                        
                <?php if ($_smarty_tpl->tpl_vars['item']->value['child_flg']>0){?>
				 <li><a href="<?php if (strlen($_smarty_tpl->tpl_vars['item']->value['link'])>0){?><?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['item']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?><?php }else{ ?>#<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a>
					<ul>
					<?php  $_smarty_tpl->tpl_vars['sub1'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sub1']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['item']->value['child']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sub1']->key => $_smarty_tpl->tpl_vars['sub1']->value){
$_smarty_tpl->tpl_vars['sub1']->_loop = true;
?>
                    	<?php if ($_smarty_tpl->tpl_vars['sub1']->value['child_flg']>0){?>					
						<li><a href="<?php if (strlen($_smarty_tpl->tpl_vars['item']->value['link'])>0){?><?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?><?php }else{ ?>#<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a>
							<ul>
								<?php  $_smarty_tpl->tpl_vars['sub2'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['sub2']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['sub1']->value['child']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['sub2']->key => $_smarty_tpl->tpl_vars['sub2']->value){
$_smarty_tpl->tpl_vars['sub2']->_loop = true;
?>
									<li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['sub2']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub2']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub2']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub2']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a></li>
								<?php } ?>
							</ul>
						</li>
						<?php }else{ ?>
							<li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['sub1']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sub1']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a></li>
						<?php }?>
					<?php } ?>
					</ul>
				 </li>
				<?php }else{ ?>
					 <li><a href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php if ($_smarty_tpl->tpl_vars['item']->value['page_flg']==1){?>page/v/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==2){?>danhmuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }elseif($_smarty_tpl->tpl_vars['item']->value['page_flg']==3){?>tintuc/ds/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['link'], ENT_QUOTES, 'UTF-8');?>
<?php }?>"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['menu_name'], ENT_QUOTES, 'UTF-8');?>
</a></li>
				<?php }?>
			<?php } ?></ul></div></div> 						</div> 						<div class="row"><div class="container" id="content"></div></div> 						<div class="row"><div class="container" id="footer"></div></div> 					</body> 				</html><?php }} ?>