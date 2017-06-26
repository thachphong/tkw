<?php /* Smarty version Smarty-3.1.14, created on 2017-06-16 23:30:04
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\menu\edit.html" */ ?>
<?php /*%%SmartyHeaderCode:194925943e2d9b21a84-95471666%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '865d4010a7b20e29c0dabaff19c5d2fa0e4edc5b' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\menu\\edit.html',
      1 => 1497630585,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '194925943e2d9b21a84-95471666',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5943e2d9ca5db6_94889601',
  'variables' => 
  array (
    'menu_level' => 0,
    'parent_list1' => 0,
    'item' => 0,
    'parent_id_1' => 0,
    'menu_name' => 0,
    'menu_id' => 0,
    'page_flg' => 0,
    'sort' => 0,
    'del_flg' => 0,
    'ctg_list' => 0,
    'page_list' => 0,
    'news_list' => 0,
    'link' => 0,
    'parent_list2' => 0,
    'parent_id_2' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5943e2d9ca5db6_94889601')) {function content_5943e2d9ca5db6_94889601($_smarty_tpl) {?><div class="row" style="width: 700px">
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
                      <?php if ($_smarty_tpl->tpl_vars['menu_level']->value>1){?>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Menu cấp 1<span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control select2" name="parent_id_1" id="parent_id_1">
                          	 <option value=""></option>
                          	 <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['parent_list1']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
?>
                          	 	<option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['menu_id'];?>
" <?php if ($_smarty_tpl->tpl_vars['parent_id_1']->value==$_smarty_tpl->tpl_vars['item']->value['menu_id']){?>selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['item']->value['menu_name'];?>
</option>
                          	 <?php } ?>                          	 
                          </select>                          
                        </div>
                      </div>
                      <?php }?>
                      <?php if ($_smarty_tpl->tpl_vars['menu_level']->value>2){?>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Menu cấp 2<span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control select2" name="parent_id_2" id="parent_id_2">
                          	 <option value=""></option> 
                          </select>                          
                        </div>
                      </div>
                      <?php }?>	
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="ctg_name">Tên menu<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="ctg_name" required="required" name="menu_name" class="form-control col-md-7 col-xs-12" value="<?php echo $_smarty_tpl->tpl_vars['menu_name']->value;?>
">
                         
                          <input type="hidden"  name="menu_id" value="<?php echo $_smarty_tpl->tpl_vars['menu_id']->value;?>
">
                          <input type="hidden"  name="menu_level" value="<?php echo $_smarty_tpl->tpl_vars['menu_level']->value;?>
">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Link tới</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control select2" name="page_flg" id="page_flg">
                          	 <option ></option>
                          	 <option value="2" <?php if ($_smarty_tpl->tpl_vars['page_flg']->value==2){?>selected="selected"<?php }?>>Danh mục sản phẩm</option>
                          	 <option value="1" <?php if ($_smarty_tpl->tpl_vars['page_flg']->value==1){?>selected="selected"<?php }?>>Trang</option>
                          	 <option value="3" <?php if ($_smarty_tpl->tpl_vars['page_flg']->value==3){?>selected="selected"<?php }?>>Tin tức</option>
                          </select>                          
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Trag/Danh mục</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control select2" name="link" id="menu_link">                          	 
                          </select>                          
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">Thứ tự hiển thị</label>
                        <div class="col-md-3 col-sm-3 col-xs-12">
                          <input id="ctg_sort" class="form-control col-md-7 col-xs-12" type="number" name="menu_sort" value="<?php echo $_smarty_tpl->tpl_vars['sort']->value;?>
" >
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
                        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
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
	var ctg_list =JSON.parse( "<?php echo $_smarty_tpl->tpl_vars['ctg_list']->value;?>
");
	var page_list =JSON.parse( "<?php echo $_smarty_tpl->tpl_vars['page_list']->value;?>
");
	var news_list =JSON.parse( "<?php echo $_smarty_tpl->tpl_vars['news_list']->value;?>
");
	var link_val ="<?php echo $_smarty_tpl->tpl_vars['link']->value;?>
";
	var list_level2= '<?php if (isset($_smarty_tpl->tpl_vars['parent_list2']->value)){?><?php echo $_smarty_tpl->tpl_vars['parent_list2']->value;?>
<?php }?>';
	if(list_level2.length > 0){
		list_level2 = JSON.parse(list_level2);
	}
	$(document).ready(function() {
		
		var page_flg = $('#page_flg').val();
		if(page_flg != null){			
			change_option(page_flg,link_val);
		}
		$(document).off('change','#page_flg'); 
        $(document).on('change','#page_flg',function(event){
        	var val = $(this).val();
        	change_option(val);
        });
        $(document).off('change','#parent_id_1'); 
        $(document).on('change','#parent_id_1',function(event){
        	var val = $("#parent_id_1 option:selected").text();        
        	change_option_2($(this).val());
        });
		<?php if ($_smarty_tpl->tpl_vars['parent_id_2']->value>0){?>
			change_option_2(<?php echo $_smarty_tpl->tpl_vars['parent_id_1']->value;?>
,<?php echo $_smarty_tpl->tpl_vars['parent_id_2']->value;?>
);
		<?php }?>
	});
	function change_option_2(val,sel=0){
		var str_op = '<option value=""></option>';
			
		for(i=0;i<list_level2.length;i++){
				//console.log(list_level2[i].parent_id);
				if(val == list_level2[i].parent_id){
					if(sel == list_level2[i].menu_id){
						str_op += '<option value="'+list_level2[i].menu_id+'" selected>'+list_level2[i].menu_name+'</option>';
					}else{
						str_op += '<option value="'+list_level2[i].menu_id+'">'+list_level2[i].menu_name+'</option>';
					}					
				}
		};
		$('#parent_id_2').empty();
		$('#parent_id_2').append(str_op);
	};
	function change_option(val,v_link_val=''){        	
        	$("#menu_link").empty();
        	var str_opt ="";
        	//console.log(val);
        	if(val == "2"){
        		$.each( ctg_list, function( key, value ) {
        			if(v_link_val.length > 0 && value.ctg_no == v_link_val){
        				//console.log(v_link_val);
        				str_opt += '<option value="'+value.ctg_no+'" selected="selected">'+value.ctg_name + "</option>";
        			}else{
        				str_opt += '<option value="'+value.ctg_no+'">'+value.ctg_name + "</option>";
        			}					
					
				});
        	}else if(val == 1){
        		//console.log(v_link_val);
        		$.each( page_list, function( key, value ) {
        			//console.log(value.page_no);
        			//console.log(v_link_val.length);
        			if(v_link_val.length > 0 && value.page_no == v_link_val){
        				//console.log(v_link_val);
        				str_opt += '<option value="'+value.page_no+'" selected="selected">'+value.page_name + "</option>";
        			}else{
        				str_opt += '<option value="'+value.page_no+'">'+value.page_name + "</option>";
        			}					
					
				});
        	}else if(val == 3){
        		$.each( news_list, function( key, value ) {        			
        			if(v_link_val.length > 0 && value.ctg_no == v_link_val){
        				//console.log(v_link_val);
        				str_opt += '<option value="'+value.ctg_no+'" selected="selected">'+value.ctg_name + "</option>";
        			}else{
        				str_opt += '<option value="'+value.ctg_no+'">'+value.ctg_name + "</option>";
        			}					
					
				});
        	}
        	$("#menu_link").append(str_opt);
        	
        	
        		//console.log(v_link_val);
        		//$("#menu_link").val(v_link_val);
        	//}
        };
</script><?php }} ?>