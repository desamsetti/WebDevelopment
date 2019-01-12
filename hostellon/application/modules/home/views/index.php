<?php $this->load->view('includes/head');?>
	 <div class="container post" style="min-height:650px;width:100%;padding:0px;background:#fff;">
			<a href="<?php echo $this->config->item('root_dir')?>home/contactus">New page</a><br>
			<a onclick="getmodelopen()">Model open</a></br>
			<a onclick="getajaxcall(25)">Ajax page</a></br>
			Calander script&nbsp;&nbsp;<input type='text' readonly' id='sdate'placeholder='Pick date'>

			<div id='acall'>Ajax call content will appear here</div>
	  </div>	

	  <div id='acall'></div>
		<?php $this->load->view('includes/footer');?>
		<script src="<?php echo $this->config->item('root_dir')?>assets/codejs/index.js"></script>