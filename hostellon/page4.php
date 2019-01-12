<?php
/*
Author: Javed Ur Rehman
Website: https://htmlcssphptutorial.wordpress.com
*/
?>

<?php 
require('db.php');
include("auth.php"); //include auth.php file on all secure pages ?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Hostello-Dashboard</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/customdash.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
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
  -webkit-transition:widht 0.4s ease-in-out;
  transition:width 0.4s ease-in-out;
  }
  input[type=text]:focus{
  width:25%;
  }
  .img {
  float:left;
  padding-bottom:20px;
  }
  .rating > span:hover:before {
   content: "\2605";
   position: absolute;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
}
div.stars {
  width: 270px;
  display: inline-block;
}

input.star { display: none; }

label.star {
  float: right;
  padding: 10px;
  font-size: 36px;
  color: #444;
  transition: all .2s;
}

input.star:checked ~ label.star:before {
  content: '\f005';
  color: #FD4;
  transition: all .25s;
}

input.star-5:checked ~ label.star:before {
  color: #FE7;
  text-shadow: 0 0 20px #952;
  }
  input.star-2:checked ~ label.star:before {
  color: blue;
  
}
input.star-3:checked ~ label.star:before {
  color: #00ffff ;
  
}
input.star-4:checked ~ label.star:before {
  color: #008000;
  
}
input.star-1:checked ~ label.star:before { color: #F62; }

label.star:hover { transform: rotate(-15deg) scale(1.3); }

label.star:before {
  content: '\f006';
  font-family: FontAwesome;
}
  </style>
  </head>
<link rel="icon" type="image/png"
     href="C:\Users\sujen\Desktop\boot\Boot display\boot best\bootstrap-3.3.6-dist\bunk-bedroom-furniture.png"/>
  <body style="background-color:#FFFFFF">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 <div class="navbar navbar-default navbar-fixed-top" role="navigation">
<div class="container">
<div class="navbar-header">
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>

<a class="navbar-brand" href="#" > <strong>Hostello</strong></a>

</div>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav navbar-right">
<li><a href="index.php">Home</a></li>
</ul>
</div>
</div>
</div> 








<div>
<div class="container">

<div class="form" align="center">
<form>
<br>
<input type="text" name="search" placeholder ="City">
<input type="text" name="search1" placeholder ="Area">
<a href="dashboard.php" class="myButton">Go</a>
</form>
<br>
<br>













<div class="row">
            <div class="col-md-7">
                <a href="#"></a>
				<h2><strong>Lakshmi Ganapati Boys Hostel</strong></h2>
                    <img class="img-responsive" src="H3.jpg" alt="hostel" height="500" width="500">
				
                </a>




            <div class="col-md-5">
               
                <h5>For Executives & Students</h5>
                <p>House No.7-1-619/A/37,Behind Mythrivanam Complex,Gayatri Nagar, Ameerpet, Hyderabad.</p>
                
            </div>
			<div class="stars">

  <form action="">

    <input class="star star-5" id="star-5" type="radio" name="star"/>

    <label class="star star-5" for="star-5"></label>

    <input class="star star-4" id="star-4" type="radio" name="star"/>

    <label class="star star-4" for="star-4"></label>

    <input class="star star-3" id="star-3" type="radio" name="star"/>
    <label class="star star-3" for="star-3"></label>

    <input class="star star-2" id="star-2" type="radio" name="star"/>

    <label class="star star-2" for="star-2"></label>

    <input class="star star-1" id="star-1" type="radio" name="star"/>

    <label class="star star-1" for="star-1"></label>

  </form>

</div>

        </div>
        <!-- /.row -->

		
		
		
		<div class="row text-center">

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                  
                    <div class="caption">
                        <h1>Map view</h1>
       <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script><div style='overflow:hidden;height:275px;width:250px;'><div id='gmap_canvas' style='height:275px;width:250px;'></div><div><small><a href="http://embedgooglemaps.com">									embed google maps							</a></small></div><div><small><a href="http://werkenbij.rebelinternet.nl/hr-manager/">HR Manager</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><script type='text/javascript'>function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(17.4374614,78.4482878),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(17.4374614,78.4482878)});infowindow = new google.maps.InfoWindow({content:'<strong>Lakshmi Ganapati Boys Hostel</strong><br>Behind Mythrivanam Complex,Gayatri Nagar, Ameerpet, Hyderabad.<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
                        <p>
						   <h1><strong><b>6000/-</b></strong></h1>
                           <a href="" class="btn btn-default btn-lg"> <span class="network-name"><strong>₹ </strong>Pay Now</span></a>
                        </p>
                    </div>
                </div>
            </div>

           
            </div>
			  
            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="ac.jpg" alt="">
                    <div class="caption">
                        <h1><strong>Features</strong></h1>
                        <pre><p style="text-align:left"><strong>✔</strong> AC<br><strong>✔</strong> Food<br><strong>✔</strong> Free Wifi<br><strong>✔</strong>TV</p></pre>
						
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="Geyser.jpg" alt="">
                    <div class="caption">
					
                        <h1><strong>Features</strong></h1>
                        <pre><p style="text-align:left"><strong>✔</strong> 24X7 Water<br><strong>✔</strong> Hot Water<br><strong>✔</strong> Lockers</p></pre>
						
                    </div>
                       
                    </div>
                </div>
            </div>

        </div>
		
		
		
		
		
		
        <hr>
		
		


        <hr>
		

		
		

        <!-- /.row -->

        <hr>
		

		
		
		
		
	



</div>

				</div>
				
				
					
				
					</div><!--/recommended_items-->
					
				</div>
			</div>
		</div>

<div id="cp_widget_bbd52118-9132-4ba2-b39d-2b2e6d0560df">...</div><script type="text/javascript">
var cpo = []; cpo["_object"] ="cp_widget_bbd52118-9132-4ba2-b39d-2b2e6d0560df"; cpo["_fid"] = "AgKA2rtEnI3T";
var _cpmp = _cpmp || []; _cpmp.push(cpo);
(function() { var cp = document.createElement("script"); cp.type = "text/javascript";
cp.async = true; cp.src = "//www.cincopa.com/media-platform/runtime/libasync.js";
var c = document.getElementsByTagName("script")[0];
c.parentNode.insertBefore(cp, c); })(); </script><noscript>Powered by Cincopa <a href='http://www.cincopa.com/media-platform/podcast-player'>Podcast Hosting</a> for Business solution.<span>New Gallery 2016/7/25</span><span>originaldate</span><span> 1/1/0001 6:00:00 AM</span><span>width</span><span> 345</span><span>height</span><span> 230</span><span>originaldate</span><span> 1/1/0001 6:00:00 AM</span><span>width</span><span> 452</span><span>height</span><span> 288</span><span>originaldate</span><span> 1/1/0001 6:00:00 AM</span><span>width</span><span> 700</span><span>height</span><span> 465</span></noscript>




		</section>
	






















<div class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
<div class="container">
<div class="navbar-text pull-left">
<p>Hostello</p>
</div>
<div class="navbar-text pull-right">
<a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
<a href="#"><i class="fa fa-twitter fa-2x"></i></a>
<a href="#"><i class="fa fa-google-plus fa-2x"></i></a>
</div>
</div>
</div>
<div class="modal fade" id="contact" role="dialog">
<div class="modal-dialog">
<div class="modal-content">
<form class="form-horizontal" role="form">
<div class="modal-header">
<h4>Contact</h4>
</div>
<div class="modal-header">
</div>
<div class="modal-body">
<div class="form-group">
<label form-"contact-name" class="col-sm-2 control-label">Name</label>
<div class="col-sm-10">
<input type="text" class="form-control" id="contact-name" placeholder="First & Last Name">
</div>
</div>
<div class="form-group">
<label form-"contact-email" class="col-sm-2 control-label">Email</label>
<div class="col-sm-10">
<input type="text" class="form-control" id="contact-name" placeholder="Email">
</div>
</div>
<div class="form-group">
<label form-"contact-message" class="col-sm-2 control-label">Message</label>
<div class="col-sm-10">
<textarea class="form-control" rows="4"></textarea>
</div>
</div>

</div>
<div class="modal-body">

</div>
<div class="modal-footer">
<a class="btn btn-primary" data-dismiss="modal">Close</a>
<button type"submit" class="btn btn-primary">Send</button>
</div>
</form>
</div>
</div>
</div>
  </body>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</html>--