Availability of user name...!!!
<?php
$connect = mysql_connect('whatever','whatever','whatever');
$database = mysql_select_db('your dbname');
$username = $_POST['username'];
if(isset($username)){
$mysql_get_users = mysql_query("SELECT * FROM table_name where username='$username'");

$get_rows = mysql_affected_rows($connect);

if($get_rows >=1){
echo "user exists";
die();
}

else{
echo "user do not exists";
}



}
?>