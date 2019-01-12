<?php $this->load->view('includes/head');?>
       <div class="container post" style="min-height:650px;width:100%;padding:0px;background:#fff;">
			 Welcome to page 2   <br>
			 <a href="<?php echo $this->config->item('root_dir')?>home/">Back to index</a><br>
			 <a href="<?php echo $this->config->item('root_dir')?>page/">Call other control</a><br>
			  <a href="<?php echo $this->config->item('root_dir')?>page/callmodel/?token=345">Call model</a><br>
			   <a href="<?php echo $this->config->item('root_dir')?>page/callhelper/?token=123">Call helper</a><br>
        </div>
		
		<?php $this->load->view('includes/footer');?>