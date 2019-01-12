<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends MX_Controller
{
	public function __construct()
	{
		parent::__construct();
			
	}
	function basicvalidate()
	{
		if(count($_REQUEST)<=0)
		{
			$reqdata = file_get_contents('php://input');			
			$reqdata = json_decode($reqdata,1);
		}
		else
		{
			$reqdata = $_REQUEST;
		}
		
		
			return $reqdata;
		
	}
	function index() 
	{
		$reqdata = $this->basicvalidate();	
		
		$this->load->view('home/index');
	}
	
		
	function contactus() 
	{
		$this->load->view('home/contactus');
	}

			
	function testpage2() 
	{
		$reqdata = $this->basicvalidate();	
		print_r($reqdata);
	}


	
}
?>