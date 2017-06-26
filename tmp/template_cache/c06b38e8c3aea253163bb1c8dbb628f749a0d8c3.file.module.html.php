<?php /* Smarty version Smarty-3.1.14, created on 2017-06-24 14:16:09
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\template\module.html" */ ?>
<?php /*%%SmartyHeaderCode:9457594dfe36d44718-53672122%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c06b38e8c3aea253163bb1c8dbb628f749a0d8c3' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\template\\module.html',
      1 => 1498288566,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '9457594dfe36d44718-53672122',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594dfe36dce460_04003908',
  'variables' => 
  array (
    'module_name' => 0,
    'data_list' => 0,
    'chk_line' => 0,
    'item' => 0,
    'options' => 0,
    'row' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594dfe36dce460_04003908')) {function content_594dfe36dce460_04003908($_smarty_tpl) {?><!--module -->
<div class="x_title title_small">
   <h4><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['module_name']->value, ENT_QUOTES, 'UTF-8');?>
</h4>
</div>
<div class="clearfix"></div>
<?php $_smarty_tpl->tpl_vars['chk_line'] = new Smarty_variable(-1, null, 0);?> 
<?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['data_list']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?>
	<?php $_smarty_tpl->tpl_vars['chk_line'] = new Smarty_variable($_smarty_tpl->tpl_vars['chk_line']->value+1, null, 0);?>	
	<?php if ($_smarty_tpl->tpl_vars['chk_line']->value==0){?>
		<div class="form-group">
		   <?php }elseif($_smarty_tpl->tpl_vars['chk_line']->value%3==0){?>
		</div>
		<div class="form-group">
		   <?php }elseif($_smarty_tpl->tpl_vars['item']->value['new_line']==1){?>
		</div>
		<div class="form-group">
	    <?php $_smarty_tpl->tpl_vars['chk_line'] = new Smarty_variable(0, null, 0);?>
	<?php }?>
	    <label class="control-label col-md-2 col-sm-2 col-xs-12"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['struct_name'], ENT_QUOTES, 'UTF-8');?>
</label>
	    <div class="col-md-2 col-sm-2 col-xs-12">
	       <?php if ($_smarty_tpl->tpl_vars['item']->value['type']=='select'){?>	
	       		<select class="form-control col-md-2 col-xs-12" name="struct[<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['struct_id'], ENT_QUOTES, 'UTF-8');?>
_<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['template_detail_id'], ENT_QUOTES, 'UTF-8');?>
]">
	       			<option value=""></option>
	       			<?php  $_smarty_tpl->tpl_vars['row'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['row']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['options']->value[$_smarty_tpl->tpl_vars['item']->value['option_key']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['row']->key => $_smarty_tpl->tpl_vars['row']->value){
$_smarty_tpl->tpl_vars['row']->_loop = true;
?>
	       				 <option value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['row']->value['option_val'], ENT_QUOTES, 'UTF-8');?>
" <?php if ($_smarty_tpl->tpl_vars['item']->value['struct_val']==$_smarty_tpl->tpl_vars['row']->value['option_val']){?>selected="selected"<?php }?>><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['row']->value['option_name'], ENT_QUOTES, 'UTF-8');?>
</option>
	       			<?php } ?>
	       		</select>
	       <?php }else{ ?>
	       		<input type="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['type'], ENT_QUOTES, 'UTF-8');?>
" class="form-control col-md-2 col-xs-12" name="struct[<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['struct_id'], ENT_QUOTES, 'UTF-8');?>
_<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['template_detail_id'], ENT_QUOTES, 'UTF-8');?>
]" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['struct_val'], ENT_QUOTES, 'UTF-8');?>
">
	       <?php }?>
	    </div>
<?php } ?>
</div><?php }} ?>