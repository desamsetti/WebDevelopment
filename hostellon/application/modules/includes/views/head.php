<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>NEW LOOK</title>
    <!-- Latest compiled and minified CSS -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="google-site-verification" content="MkX9Hy7o5eQ9hQRE8I0CsUqJ5FFZWyEh2eBlWdmQI6E" /> 
    <link rel="stylesheet" href="<?php echo $this->config->item('root_dir')?>assets/css/bootstrap.min.css">
    <link rel="icon" type="image/png" href="<?php echo $this->config->item('root_dir')?>assets/images/favicon.png">
    <script src="<?php echo $this->config->item('root_dir')?>assets/js/jquery.min.js"></script>
    <script src="<?php echo $this->config->item('root_dir')?>assets/js/bootstrap.min.js"></script>
	<script src="<?php echo $this->config->item('root_dir')?>assets/js/dcalendar.picker.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Droid+Serif|Open+Sans:400,700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link href="<?php echo $this->config->item('root_dir')?>assets/css/font-awesome.css" rel="stylesheet" />
    <link href="<?php echo $this->config->item('root_dir')?>assets/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="<?php echo $this->config->item('root_dir')?>assets/css/custom.css">
    <link rel="stylesheet" href="<?php echo $this->config->item('root_dir')?>assets/css/style.css">
    <link href="<?php echo $this->config->item('root_dir')?>assets/css/default.css" rel="stylesheet">
    <link href="<?php echo $this->config->item('root_dir')?>assets/css/regpopup.css" rel="stylesheet">
	<link href="<?php echo $this->config->item('root_dir')?>assets/css/makers.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600' rel='stylesheet' type='text/css'>	
	<link href="<?php echo $this->config->item('root_dir')?>assets/css/dcalendar.picker.css" rel="stylesheet" type="text/css">
	<style>
	.active-menu {	
		color:#acb7c0 !important;
	}
	</style>	
	<script type="text/javascript">
	var BASE_PATH = '<?php echo $this->config->item('root_dir');?>' ;
	var BASE_URL = '<?php echo $this->config->item('base_url');?>' ;
	</script>
	<div class="modal fade" id="addMemberDiv" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog" >
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
					<h4 class="modal-title">Details</h4>
				</div>
				<div class="modal-body" id='modelbody'>
				</div>
			</div>
		</div>
	</div>