<?php

$host="localhost";
$users="root";
$pass="";
$db="login";
$conn=new mysqli($host,$users,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>