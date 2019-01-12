Real time e-mail existing checker...!!!
<?php
include ('database_connection.php');
if (isset($_POST['formsubmitted'])) {
$error = array();//Declare An Array to store any error message  
if (empty($_POST['name'])) {//if no name has been supplied 
    $error[] = 'Please Enter a name ';//add to array "error"
} else {
    $name = $_POST['name'];//else assign it a variable
}

if (empty($_POST['e-mail'])) {
    $error[] = 'Please Enter your Email ';
} else {


    if (preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $_POST['e-mail'])) {
       //regular expression for email validation
        $Email = $_POST['e-mail'];
    } else {
         $error[] = 'Your EMail Address is invalid  ';
    }


}


if (empty($_POST['Password'])) {
    $error[] = 'Please Enter Your Password ';
} else {
    $Password = $_POST['Password'];
}