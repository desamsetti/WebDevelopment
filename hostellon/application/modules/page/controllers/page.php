<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Page extends MX_Controller
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
		$data['reqdata']=$reqdata;
		
		$this->load->view('page/index',$data);
	}

function callmodel()
	{
			$reqdata = $this->basicvalidate();	
			$data['reqdata']=$reqdata;
			$this->load->model("page/page_model");
			$reqdata['dates']=$this->load->page_model->getdata($reqdata);
			
	}
	function callhelper()
	{
		$reqdata = $this->basicvalidate();	
		$this->load->helper('test_helper');
		$res = gettesthelper($reqdata);
		print_r($res);
	}
}
?>