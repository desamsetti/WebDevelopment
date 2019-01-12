<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Registration</title>
<link rel="stylesheet" href="css/style.css" />



    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/customlogin.css" rel="stylesheet">
	<link rel="stylesheet" href="css/animate.min.css">

    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">





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
  box-sizing:border-box;
  width:130px;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
  }
  
  input[type="password"]{
  box-sizing:border-box;
  width:130px;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
  }  

  
   body{
  background-image:url("HomeBack.jpg");
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-position:bottom;
  }
  input[type="text"]{
  width:200px;
  box-sizing:border-box;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
  
  
  }
input[type="email"]{
  box-sizing:border-box;
  width:200px;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
    
  }

  input[type="password"]{
  width:200px;
  box-sizing:border-box;
  border:4px solid #808080;
  border-radius: 4px;
  font-size :16px;
  background-color:white;
  
  background-position:10px 10px;
  background-repeat : no-repeat;
  padding: 12px 20px 12px 40px;
  
  
  }


  </style>

</head>
<body>
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
<li><a href="login.php">Login</a></li>
<li><a href="#contact" data-toggle="modal">Contact</a><li>
</ul>
</div>
</div>
</div> 



<?php
	require('db.php');
	$customer="";
        if(count($_POST)>0) {
        $conn = mysqli_connect("mysql.hostinger.in","u597855797_hoste","pajworld");
        mysqli_select_db($conn,"register");

    // If form submitted, insert values into the database.
    if (isset($_POST['username'])){
        $username = $_POST['username'];
		
	 
	 if(isset($_POST['email']))
{
 $email=$_POST['email'];

 $checkdata=" SELECT email FROM users WHERE email='$email' ";

 $query=mysqli_query($connection,$checkdata);

 if(mysqli_num_rows($query)>0)
 {
  echo "<div class='form'><h3>email allready exists.</h3></div>";
 }
 else
 {
  
        $password = $_POST['password'];
		$mobile = $_POST['mobile'];
		$customer = $_POST['customer'];
		$username = stripslashes($username);
		$email = stripslashes($email);
		$password = stripslashes($password);
		$mobile = stripslashes($mobile);
		$customer = stripslashes($customer);
		
		$trn_date = date("Y-m-d H:i:s");
         $query = "INSERT into users (username, password, email, mobile,customer,trn_date) VALUES ('$username', '".md5($password)."', '$email','$mobile','$customer', '$trn_date')";
        $result = mysqli_query($connection,$query);
		$query = mysqli_query($connection,"select*from users where email='$email'");
		
        if($result){
            echo "<div class='form'><h3>You are registered successfully.</h3><br/>Click here to <a href='login.php'>Login</a></div>";
        }
    }
 }

}
}
else{
?>









<div class="form" align="center">

<form name="registration" action="" method="post">
<input type="text" name="username" id="username" placeholder="Username" required /><br>
<input type="email" name="email" id="email" placeholder="Email" required /><br>
<input type="password" name="password" id="password" placeholder="Password" required /><br>
<input type="text" name="mobile" id="mobile" placeholder="Mobile" required /><br><br>
  <input type="radio" name="customer" <?php if (isset($customer) && $customer=="owner") echo "checked";?> value="owner">Owner
  <input type="radio" name="customer" <?php if (isset($customer) && $customer=="hosteller") echo "checked";?> value="hosteller">Hosteller<br>
  
  
  
  
   
   
 
    
  
  
  
  <input type="submit" name="submit" id="submit" value="Register" />
  <br><br>
</form>
</div>












<?php } ?>






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
</html>		