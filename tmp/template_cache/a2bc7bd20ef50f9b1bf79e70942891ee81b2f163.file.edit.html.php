<?php /* Smarty version Smarty-3.1.14, created on 2017-06-25 10:51:41
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\template\edit.html" */ ?>
<?php /*%%SmartyHeaderCode:4071594e95f616d5f0-53178928%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a2bc7bd20ef50f9b1bf79e70942891ee81b2f163' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\template\\edit.html',
      1 => 1498362694,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4071594e95f616d5f0-53178928',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594e95f62221e0_70143435',
  'variables' => 
  array (
    'template_no' => 0,
    'template_id' => 0,
    'template_name' => 0,
    'active' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594e95f62221e0_70143435')) {function content_594e95f62221e0_70143435($_smarty_tpl) {?><div class="row" style="width: 700px">
              <div class="col-md-12 col-sm-12 col-xs-12">
                
                  <div class="x_content">
                    <br />
                    <form id="form_ctg" action="" class="form-horizontal form-label-left" enctype="multipart/form-data">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="ctg_name">Template no<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="template_no" required="required" name="template_no" class="form-control col-md-7 col-xs-12" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['template_no']->value, ENT_QUOTES, 'UTF-8');?>
">
                          <input type="hidden"  name="template_id" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['template_id']->value, ENT_QUOTES, 'UTF-8');?>
" >                          
                        </div>                        
                      </div>  
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="ctg_name">Template name<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="template_name" required="required" name="template_name" class="form-control col-md-7 col-xs-12" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['template_name']->value, ENT_QUOTES, 'UTF-8');?>
">                         
                        </div>                        
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Active</label>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                          <select class="form-control" name="active">
                          	 <option value="0" <?php if ($_smarty_tpl->tpl_vars['active']->value==0){?>selected="selected"<?php }?>>Không</option>
                          	 <option value="1" <?php if ($_smarty_tpl->tpl_vars['active']->value==1){?>selected="selected"<?php }?>>Có</option>
                          </select>                          
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