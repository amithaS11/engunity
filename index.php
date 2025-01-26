<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>enguinity</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container" id="signUp" style="display:none;" >
       <h1 class="form-main">ENGUNITY</h1>
       <h1 class="form-title">Register</h1>
       <form method="post" action="register.php">
        <div class="input-titles">
            <input type="text" name="fname" id="fname" placeholder="First name" required>
            <label for="fname">First name</label>
        </div>
        <div class="input-titles">
            <input type="text" name="lname" id="lname" placeholder="Last name" required>
            <label for="fname">Last name</label>
        </div>
        <div class="input-titles">
            <input type="email" name="email" id="email" placeholder="Email" required>
            <label for="email">Email</label>
        </div>
        <div class="input-titles">
            <input type="password" name="password" id="password" placeholder="password" required>
            <label for="password">password</label>
        </div>
        <input type="submit" class="btn" value="Sign up" name="signUp">
       </form>
       <div class="links">
        <p>Already have Account?</p>
        <button id="signInButton">Sign In</button>
       </div>

    </div>
    <div class="container" id="signIn" >
        <h1 class="form-main">ENGUNITY</h1>
        <h2 class="form-title">Sign In</h2>
        <form method="post" action="register.php">
          <div class="input-group">
              <input type="email" name="email" id="email" placeholder="Email" required>
              <label for="email">Email</label>
          </div>
          <div class="input-group">
              <input type="password" name="password" id="password" placeholder="Password" required>
              <label for="password">Password</label>
          </div>
          
         <input type="submit" class="btn" value="Sign In" name="signIn">
        </form>
        
        <div class="links">
          <p>Don't have account yet?</p>
          <button id="signUpButton">Sign Up</button>
        </div>
      </div>
      <script src="script.js"></script>
    
</body>
</html>
