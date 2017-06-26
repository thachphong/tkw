<?php /* Smarty version Smarty-3.1.14, created on 2017-06-25 23:39:09
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\template_content\edit.html" */ ?>
<?php /*%%SmartyHeaderCode:13979594f6831bceaa1-56365465%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8d4387735a35d09bcf69b6910ec8a85957eddaab' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\template_content\\edit.html',
      1 => 1498408737,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13979594f6831bceaa1-56365465',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594f6831c628e7_46876657',
  'variables' => 
  array (
    'section_id' => 0,
    'con_id' => 0,
    'column_id' => 0,
    'con_name' => 0,
    'module_list' => 0,
    'item' => 0,
    'mod_outner_id' => 0,
    'mod_inner_id' => 0,
    'sort' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594f6831c628e7_46876657')) {function content_594f6831c628e7_46876657($_smarty_tpl) {?><div class="row" style="width: 700px">
              <div class="col-md-12 col-sm-12 col-xs-12">
                
                  <div class="x_content">
                    <br />
                    <form id="form_ctg" action="" class="form-horizontal form-label-left" enctype="multipart/form-data">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="section_id">Section id<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="section_id">
                          	<option value=""></option>
                          	<option value="section_1" <?php if ($_smarty_tpl->tpl_vars['section_id']->value=='section_1'){?>selected="selected"<?php }?>>Section 1</option>
                          	<option value="section_2" <?php if ($_smarty_tpl->tpl_vars['section_id']->value=='section_2'){?>selected="selected"<?php }?>>Section 2</option>
                          	<option value="section_3" <?php if ($_smarty_tpl->tpl_vars['section_id']->value=='section_3'){?>selected="selected"<?php }?>>Section 3</option>
                          	<option value="section_4" <?php if ($_smarty_tpl->tpl_vars['section_id']->value=='section_4'){?>selected="selected"<?php }?>>Section 4</option>
                          	<option value="section_5" <?php if ($_smarty_tpl->tpl_vars['section_id']->value=='section_5'){?>selected="selected"<?php }?>>Section 5</option>
                          	<option value="footer" <?php if ($_smarty_tpl->tpl_vars['section_id']->value=='footer'){?>selected="selected"<?php }?>>Footer</option>
                          </select>
                          <input type="hidden"  name="con_id" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['con_id']->value, ENT_QUOTES, 'UTF-8');?>
" >                          
                        </div>                        
                      </div>  
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="column_id">Conlumn id<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="column_id">
                          	<option value=""></option>
                          	<option value="col_1" <?php if ($_smarty_tpl->tpl_vars['column_id']->value=='col_1'){?>selected="selected"<?php }?>>Column 1</option>
                          	<option value="col_2" <?php if ($_smarty_tpl->tpl_vars['column_id']->value=='col_2'){?>selected="selected"<?php }?>>Column 2</option>
                          	<option value="col_3" <?php if ($_smarty_tpl->tpl_vars['column_id']->value=='col_3'){?>selected="selected"<?php }?>>Column 3</option>
                          	<option value="col_4" <?php if ($_smarty_tpl->tpl_vars['column_id']->value=='col_4'){?>selected="selected"<?php }?>>Column 4</option>
                          	<option value="col_5" <?php if ($_smarty_tpl->tpl_vars['column_id']->value=='col_5'){?>selected="selected"<?php }?>>Column 5</option>
                          </select>              
                        </div>                        
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Content name</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input class="form-control" name="con_name" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['con_name']->value, ENT_QUOTES, 'UTF-8');?>
">                         
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Module outner</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="mod_outner_id">
                          	 <option value=""></option>	
                          	 <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['module_list']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
?>
                          	 		<option value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_id'], ENT_QUOTES, 'UTF-8');?>
" <?php if ($_smarty_tpl->tpl_vars['mod_outner_id']->value==$_smarty_tpl->tpl_vars['item']->value['mod_id']){?>selected="selected"<?php }?>><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_name'], ENT_QUOTES, 'UTF-8');?>
</option>	
                          	 <?php } ?>
                          </select>                          
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Module inner</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="mod_inner_id">
                          	 <option value=""></option>	
                          	 <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['module_list']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
?>
                          	 		<option value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_id'], ENT_QUOTES, 'UTF-8');?>
" <?php if ($_smarty_tpl->tpl_vars['mod_inner_id']->value==$_smarty_tpl->tpl_vars['item']->value['mod_id']){?>selected="selected"<?php }?>><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_name'], ENT_QUOTES, 'UTF-8');?>
</option>	
                          	 <?php } ?>
                          </select>                          
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Thứ tự hiển thị</label>
                        <div class="col-md-3 col-sm-6 col-xs-12">
                          <input class="form-control" name="sort" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['sort']->value, ENT_QUOTES, 'UTF-8');?>
" type="number">                         
                        </div>
                      </div>                      
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3" style="text-align: center">
                          <button class="dialog_close btn btn-primary" type="button">Thoát</button>
                          <button class="btn btn-success" id="btn_save" type="button">Cập nhật</button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
           <!-- </div>-->
<script>
	
	
	$(document).ready(function() {
		
		
		$(document).off('change','#page_flg'); 
        $(document).on('change','#page_flg',function(event){
        	var val = $(this).val();
        	//change_option(val);
        });
        $(document).off('click','#btn_upload'); 
        $(document).on('click','#btn_upload',function(event){
        	$('#upload_file').click();
        });	
        $(document).off('change','#upload_file'); 
        $(document).on('change','#upload_file',function(event){
        	var corractpath = $(this).val();
        	//var filename = corractpath.replace(/^.*[\\\/]/, '')        	
        	
        	var file_data=$(this).prop("files")[0];
        	//console.log(file_data);	
        	var form_data=new FormData(this);
            form_data.append("file",file_data);
            var base_url= "<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
";
            //console.log(form_data);	
        	Pho_upload("<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
phofile/uploadslides" ,form_data,function(datas){
				//if(datas.status =="OK"){
					 //console.log(datas);
				var file_name = datas.link.replace(base_url,"");	
				$('#img_path').val(file_name);	
				$('#img_disp').attr('src',datas.link);			
				//}else{
					//Pho_message_box_error("Lỗi",datas.msg);
				//}
                
            });
        });
	});
	
</script><?php }} ?>