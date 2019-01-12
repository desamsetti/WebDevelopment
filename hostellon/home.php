<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Explore Hostels">
    <meta name="author" content="">

    <title>Hostello</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="css/animate.css" rel="stylesheet" />
    <!-- Squad theme CSS -->
    <link href="css/style.css" rel="stylesheet">
	<link href="css/custom.css" rel="stylesheet">
	<link href="color/default.css" rel="stylesheet">
	<link rel="stylesheet" href="css/animate.min.css">
	<link rel="stylesheet" href="css/main.css" />
<style>
ul > li > a {
  position: relative;
  color: #FFFFFF;
  text-decoration: none;
}

ul > li > a:hover {
  color: #FFFFFF;
}
ul > li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.8px;
  bottom: 10px;
  left: 0;
  background-color: #FFFFFF;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
ul > li > a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
  body{
  background-image:url("bg1.jpg");
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-position:bottom;
  }
  input[type="text"]{
  width:130px;
  box-sizing:border-box;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  background-image:url('searchicon.png');
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
  }
  input[type="text"]{
  width:100%;
  }
  select{
  width:200px;
  box-sizing:border-box;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  background-image:url('searchicon.png');
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition:widht 0.4s ease-in-out;
  transition:width 0.4s ease-in-out;
  }
body{
  background-image:url("homeBack.jpg");
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-position:bottom;
  }
  h5{
	  color:white;
  }
</style>
</head>

<body style="background-color:#FFFFFF" id="page-top" data-spy="scroll" data-target=".navbar-custom">
	<!-- Preloader -->
	<div id="preloader">
	  <div id="load"></div>
	</div>
<div>
<div class="container">

<div class="form" align="center">
<form>
<br>
<br>
<br>
<select>
  <option value="hyderbad">Hyderabad</option>
  </select>

<select>
  <option value="Ameerpet">Ameerpet</option>
  <option value="SR Nagar">SR Nagar</option>
  <option value="Somajiguda">Somajiguda</option>
  <option value="Dilsukhnagar">Dilsukhnagar</option>
</select>
<a href="dashboard" class="myButton">Go</a>
</form>

</div>
</div<div align="right">
 <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                
               
               <a class="navbar-brand" href="home"> <b><strong>HOSTELLO</strong></b></a>
            
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
     <ul class="nav navbar-nav navbar-right">
<li><a href="home">Home</a></li>
<li><a href="login">Login</a></li>
<li><a href="registration">Register</a></li>
</ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
	<!-- Section: intro -->
    <section id="intro" class="intro">
	
		<div class="slogan">
			<h2>WELCOME TO <span class="text_color">HOSTELLO</span> </h2>
			
			
		</div>
		<br>
	<br>
	<br><br>
	<br>
	<br>
    </section>
	<br>
	<br>
	<br>
	
	
	
	<!-- Banner -->
			<!--
				To use a video as your background, set data-video to the name of your video without
				its extension (eg. images/banner). Your video must be available in both .mp4 and .webm
				formats to work correctly.
			-->
				<div id="banner" data-video="images/banner">
					<div class="inner">
						<header>
							<h5>Explore and choose your Hostel as you desire</h5>
						</header>
						
					</div>
				</div>
	

	
	<!-- Section: contact -->
    <section id="contact" class="home-section text-center">
		<div class="heading-contact">
			<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<div class="wow bounceInDown" data-wow-delay="0.4s">
					<div class="section-heading">
					<h2>Get in touch</h2>
					<i class="fa fa-2x fa-angle-down"></i>

					</div>
					</div>
				</div>
			</div>
			</div>
		</div>
		<div class="container">

		<div class="row">
			<div class="col-lg-2 col-lg-offset-5">
				<hr class="marginbot-50">
			</div>
		</div>
    <div class="row">
        <div class="col-lg-8">
            <div class="boxed-grey">
                <form id="contact-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">
                                Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                        </div>
                        <div class="form-group">
                            <label for="email">
                                Email Address</label>
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                        </div>
                        <div class="form-group">
                            <label for="subject">
                                Subject</label>
                            <select id="subject" name="subject" class="form-control" required="required">
                                <option value="na" selected="">Choose One:</option>
                                <option value="service">General Customer Service</option>
                                <option value="suggestions">Suggestions</option>
                                <option value="product">Product Support</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">
                                Message</label>
                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-skin pull-right" id="btnContactUs">
                            Send Message</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
		
		<div class="col-lg-4">
			<div class="widget-contact">
				<h5>Hostel Office</h5>
				
				<address>
				  <strong>Plot No.43 & 44, Shivbag Colony, Opp. Bhaskar Hospital, Ameerpet, Hyderabad.<br>
				  <abbr title="Phone">P:</abbr> (123) 456-7890
				</address>

				<address>
				  <strong>Email</strong><br>
				  <a href="mailto:#">hostello@gmail.com</a>
				</address>	
				<address>
				  <strong>We're on social networks</strong><br>
                       	<ul class="company-social">
                            <li class="social-facebook"><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li class="social-dribble"><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                            <li class="social-google"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                        </ul>	
				</address>					
			
			</div>	
		</div>
    </div>	

		</div>
	</section>
	<!-- /Section: contact -->

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12">
					<div class="wow shake" data-wow-delay="0.4s">
					<div class="page-scroll marginbot-30">
						<a href="#intro" id="totop" class="btn btn-circle">
							<i class="fa fa-angle-double-up animated"></i>
						</a>
					</div>
					</div>
					<p>&copy;Copyright 2016 - Hostello. All rights reserved. <a href="http://hostello.com/">HOSTELLO</a></p>
				</div>
			</div>	
		</div>
	</footer>

    <!-- Core JavaScript Files -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>	
	<script src="js/jquery.scrollTo.js"></script>
	<script src="js/wow.min.js"></script>
    <!-- Custom Theme JavaScript -->
    <script src="js/custom.js"></script>
	<script src=" js/jquery.min.js"></script>
			<script src=" js/jquery.scrolly.min.js"></script>
			<script src=" js/jquery.poptrox.min.js"></script>
			<script src=" js/skel.min.js"></script>
			<script src=" js/util.js"></script>
			<script src=" js/main.js"></script>

</body>

</html>