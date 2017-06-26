<?php /* Smarty version Smarty-3.1.14, created on 2017-06-24 23:01:14
         compiled from "D:\xampp\htdocs\thietkeweb\app\template\backend\template_module.html" */ ?>
<?php /*%%SmartyHeaderCode:12858594e4dabab74a3-09611870%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '16114a9e35406747813d067cd565bcc2da356142' => 
    array (
      0 => 'D:\\xampp\\htdocs\\thietkeweb\\app\\template\\backend\\template_module.html',
      1 => 1498320071,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12858594e4dabab74a3-09611870',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_594e4dabbe93b0_50821361',
  'variables' => 
  array (
    'list' => 0,
    'key' => 0,
    'item' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_594e4dabbe93b0_50821361')) {function content_594e4dabbe93b0_50821361($_smarty_tpl) {?><!DOCTYPE html>
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
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Danh sách slide<!--<small>Users</small>--></h2>
                    <ul class="nav navbar-rigth panel_toolbox" style="min-width: auto;">
                     
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <!--<li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>-->
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div class="row">
                    	<div class="col-sm-6">
                    	</div>
                    	<div class="col-sm-6">
                    		
                    		<div class="dataTables_filter" style="margin-bottom: 10px">
                    		<label style="margin: 5px 5px 0px 0;">Tìm</label>
                        	<input type="search" id="table_search" class="form-control input-sm" style="float: right;width: 88%">
                        	</div>                      	
                        </div>
                    </div>
					
                    <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
					<div class="row">
                    	<div class="col-sm-12">
                      <thead>
                        <tr>
                          <th>STT</th>                         
                          <th>Ảnh</th>                       
                          <th>Tên module</th>
                          <th>Thiết lập</th>       
                        </tr>
                      </thead>
                      <tbody id="fbody">
                      <?php  $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['item']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['list']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['item']->key => $_smarty_tpl->tpl_vars['item']->value){
$_smarty_tpl->tpl_vars['item']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['item']->key;
?>
                      	<tr>
                          <td><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['key']->value+1, ENT_QUOTES, 'UTF-8');?>
</td>
                          
                           
                          <td>
                          	<img id="img_disp" class="img-rounded" src="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['img_path'], ENT_QUOTES, 'UTF-8');?>
" width="150" height="100"/>
                          </td>                         
                          <td>
                          	  <?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_name'], ENT_QUOTES, 'UTF-8');?>

                          </td>
                          <td>
                          	<!--<button class="btn btn-warning btn-xs btn_edit" id="edit_<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_name'], ENT_QUOTES, 'UTF-8');?>
">Thiết lập</button>-->
                          	<a class="btn btn-warning btn-xs btn_edit" href="<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
template/editmod/<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['mod_id'], ENT_QUOTES, 'UTF-8');?>
">Thiết lập</a>
                          </td>
                          
                        </tr>
                      <?php } ?>                        
                      </tbody>
                    </table>
                    </div>
					</div>
					
                  </div>
                </div>
              </div>
            	
            </div>
          </div>
        
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <?php echo $_smarty_tpl->getSubTemplate ('include/footer.html', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

        <!-- /footer content -->
        
      </div>
    </div>
	
<script>
	$(document).ready(function() {
		
        $(document).off('click','.btn_edit'); 
        $(document).on('click','.btn_edit',function(event){
        	var id = $(this).attr('id');
	        	id = id.replace("edit_","");			
            	Pho_html_ajax('GET',"<?php echo htmlspecialchars(@constant('ACW_BASE_URL'), ENT_QUOTES, 'UTF-8');?>
slides/edit/"+ id ,null,function(html){
                /*Pho_modal({
		        		template:html,
				        closeClick: false,
				        closable: true, 
				        modalid:"modal1",
				        size:'large'
		        	
            	});*/
            	Pho_modal(html,"Sửa Menu",700);
            });
        });
        
        
        $("#table_search").keyup(function(){
		//hide all the rows
			//alert('sss');
	          $("#fbody").find("tr").hide();

		//split the current value of searchInput
	          var data = this.value.split(" ");
		//create a jquery object of the rows
	          var jo = $("#fbody").find("tr");
	          
		//Recusively filter the jquery object to get results.
	          $.each(data, function(i, v){
	              jo = jo.filter("*:contains('"+v+"')");
	          });
	        //show the rows that match.
	          jo.show();
	     //Removes the placeholder text  
	   
	      })/*.focus(function(){
	          this.value="";
	          $(this).css({"color":"black"});
	          $(this).unbind('focus');
	      }).css({"color":"#C0C0C0"});*/

	 

        
    });
</script>
     
    
	
</body>
</html>
<?php }} ?>