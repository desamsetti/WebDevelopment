<?php
/*
Author: Javed Ur Rehman
Website: https://htmlcssphptutorial.wordpress.com
*/
?>

<?php include("auth.php"); //include auth.php file on all secure pages ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Hostello</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	
	
	 <script type='text/javascript'>

    function searchSelect(searchForID, searchInID) {
      var input = document.getElementById(searchForID).value.toLowerCase();
      var output = document.getElementById(searchInID).options;

      for (var i = 0; i < output.length; i++) {
        if (output[i].text.toLowerCase().indexOf(input) < 0) {
          output[i].style.display = "none";
          output[i].setAttribute('style', 'display:none');

        } else {
          output[i].style.display = "";
          output[i].setAttribute('style', 'display:');
        }
      }
    }

  </script>
	
	
	
	
	
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
  background-image:url("HomeBack.jpg");
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
  -webkit-transition:widht 0.4s ease-in-out;
  transition:width 0.4s ease-in-out;
  }
  input[type=text]:focus{
  width:25%;
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

<a class="navbar-brand animated infinite pulse" href="#" >HOSTELLO</a>

</div>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav navbar-right">
<li><a href="index.php">Home</a></li>
<li><a href="logout.php">Log Out</a></li>
</ul>
</div>
</div>
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
<a href="dashboard.php" class="myButton">Go</a>
</form>

</div>
</div>

<br><br>





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
</html>