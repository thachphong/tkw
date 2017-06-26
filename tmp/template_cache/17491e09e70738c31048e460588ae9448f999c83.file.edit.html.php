<?php /* Smarty version Smarty-3.1.14, created on 2017-06-24 23:35:05
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\slides\edit.html" */ ?>
<?php /*%%SmartyHeaderCode:6618594e94b984e2c8-34863336%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '17491e09e70738c31048e460588ae9448f999c83' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\slides\\edit.html',
      1 => 1493219045,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6618594e94b984e2c8-34863336',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'img_path' => 0,
    'slide_id' => 0,
    'del_flg' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594e94b995cd89_66583863',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594e94b995cd89_66583863')) {function content_594e94b995cd89_66583863($_smarty_tpl) {?><div class="row" style="width: 700px">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <!--<div class="x_panel">
                  <div class="x_title">
                    <h2>Danh mục</h2>
                    <ul class="nav navbar-right panel_toolbox">-->
                      <!--<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>-->
                      <!--<li style="float: right"><a class="dialog_close" ><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>-->
                  <div class="x_content">
                    <br />
                    <form id="form_ctg" action="" class="form-horizontal form-label-left" enctype="multipart/form-data">
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="ctg_name">Hình ảnh<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="img_path" required="required" name="img_path" class="form-control col-md-7 col-xs-12" value="<?php echo $_smarty_tpl->tpl_vars['img_path']->value;?>
">
                          <input type="hidden"  name="slide_id" value="<?php echo $_smarty_tpl->tpl_vars['slide_id']->value;?>
" >                          
                        </div>
                        <div class="col-md-1 col-sm-1 col-xs-12">
                        	<button class="btn btn-primary" type="button" id="btn_upload">Upload</button>
                        	<input  type="file" id="upload_file" style="display: none"/>
                        	
                        </div>
                      </div>  
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12"></label>
                        <div class="col-md-8 col-sm-8 col-xs-12">
                          <img id="img_disp" class="img-rounded" width="500" height="200" <?php if (isset($_smarty_tpl->tpl_vars['img_path']->value)){?>src="<?php echo @constant('ACW_BASE_URL');?>
<?php echo $_smarty_tpl->tpl_vars['img_path']->value;?>
"<?php }?>/>                         
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Hiện/Ẩn</label>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                          <select class="form-control" name="del_flg">
                          	 <option value="0" <?php if ($_smarty_tpl->tpl_vars['del_flg']->value==0){?>selected="selected"<?php }?>>Hiện</option>
                          	 <option value="1" <?php if ($_smarty_tpl->tpl_vars['del_flg']->value==1){?>selected="selected"<?php }?>>Ẩn</option>
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
            var base_url= "<?php echo @constant('ACW_BASE_URL');?>
";
            //console.log(form_data);	
        	Pho_upload("<?php echo @constant('ACW_BASE_URL');?>
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