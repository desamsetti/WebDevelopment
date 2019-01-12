<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<title>Login</title>
<link rel="stylesheet" href="css/style.css" />
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/customlogin.css" rel="stylesheet">
	<link rel="stylesheet" href="css/animate.min.css">

    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<script language="javascript">
function check(form)
{
	if(form.username.value && form.password.value)
	{
		alert("Welcome to Hostello");
		var username= document.getElementById("form").value;
		document.write("Welcome"+username);
	}
	else{
		alert("Error Password or Username");
		
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
<a class="navbar-brand" href="#"> <strong>Hostello</strong></a>

</div>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav navbar-right">
<li><a href="dashboard.php">Home</a></li>
<li><a href="registration.php">Register</a></li>
<li><a href="#contact" data-toggle="modal">Contact</a></li>

</ul>
</div>
</div>
</div> 
<?php
	require('db.php');
	session_start();
	
	$message="";
	$customer="";
	if(count($_POST)>0) {
	$conn = mysqli_connect("mysql.hostinger.in","u597855797_hoste","pajworld");
	mysqli_select_db($conn,"u597855797_regis");
	
    // If form submitted, insert values into the database.
    if (isset($_POST['username'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
		$customer = $_POST['customer'];
		$username = stripslashes($username);
		$password = stripslashes($password);
		$customer = stripslashes($customer);
		
	
	//Checking is user existing in the database or not
        $query = "SELECT * FROM `users` WHERE username='$username' and password='".md5($password)."' and customer='$customer'";
		$result = mysqli_query( $conn,$query) or die('Could not look up user information; ' . mysqli_error($conn));
		$rows = mysqli_num_rows($result);
        if($rows==1){
			$_SESSION['username'] = $username;
			header("Location: index1.php"); // Redirect user to index.php
			}
			
			
			else{
				echo "<div class='form'><h3>Username/password is incorrect.</h3><br/>Click here to <a href='login.php'>Login</a></div>";
				}


	if($customer=="owner"){
		header("Location: ownerdash.php"); // Redirect user to index.php
		
		}


		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
	}
	
?>




<div class="form" align="center">
<h1>Log In</h1>
<form action="" method="post" name="login">
<input type="text" name="username" placeholder="Username" required />
<input type="password" name="password" placeholder="Password" required /><br>
<input type="radio" name="customer" <?php if (isset($customer) && $customer=="owner") echo "checked";?> value="owner">Owner
<input type="radio" name="customer" <?php if (isset($customer) && $customer=="hosteller") echo "checked";?> value="hosteller">Hosteller<br>
<a href="#">Forgot Password?</a>
<input name="submit" type="submit" value="Login" />
</form>
<p>Not registered yet? <a href='registration.php'>Register Here</a></p>
</div>



















<?php  ?>
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
