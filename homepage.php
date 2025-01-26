<?php
session_start();
include("connect.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link rel="stylesheet" href="styles.css">
    <style class="background">
        body {
            height: 1700px; 
            margin: 0;
            
        }
    </style>
</head>
<body>
  <div class="header">
    <nav>
      <h2 class="title">ENGUNITY</h2>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#Features'>Features</a></li>
        <li><a href='logout.php'>logout</a></li>
        
      </ul>

    </nav class="navbar">
    <div class="content" >
       <h1 class="anim"  >LEARN CONSTANTLY<br>INNOVATE CONSISTENTLY</h1>
       <P class="anim" id="Home">Engunity is web app designed to keep engineering students on track. It features hourly timetable reminders, a skill tracker, and aptitude questions to ensure they excel in their studies.</P>
    </div>
    <img src="transparent.png" class="feature anim">
   </div>
    
    <section class="section-1 anim" >
    <div class="titleS" id="Features">
        <p>         FEATURES</p>
      </div>
      <div class="box" >
        <div class="white"><span><a href="timetable.html" class="ctn" >Timetable tracker</a></span></div>
        <img src="reminder.webp">
      </div>
      <div class="box3" id="Features">
        <div class="white"><span><a href="aptitude.html" class="ctn" >Aptitude test</a></span></div>
        <img src="4.jpg"> 
      </div>
      <div class="box3" id="Features">
        <div class="white"><span><a href="skillroot.html" class="ctn" >SkillBuilder Router</a></span></div>
        <img src="career skills.jpg">
      </div>
      <div class="box3" id="Features">
        <div class="white"><span><a href="me.html" class="ctn" >Stress Relief Hub</a></span></div>
        <img src="stressrelief.jpg">
      </div>
      <div class="box3" id="Features">
        <div class="white"><span><a href="tracker.php" class="ctn" >Daily challenge tracker</a></span></div>
        <img src="daily.jpg">
      </div>
    </section> 
   <?php 
       if(isset($_SESSION['email'])){
        $email=$_SESSION['email'];
        $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
        while($row=mysqli_fetch_array($query)){
            echo $row['firstName'].' '.$row['lastName'];
        }
       }
       ?>  
      </p>
    </div>
</body>
</html>