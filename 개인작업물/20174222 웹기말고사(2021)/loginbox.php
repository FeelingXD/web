<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/login.css">
</head>

<body>
    <?php include "header.php"; ?>
    <div class="main">
        <p class="sign" align="center">Sign in</p>
        <form class="form1" name='form1' action="login.php" method="POST">
            <input class="id" type="text" align="center" placeholder="Username" name="id">
            <input class="pw" type="password" align="center" placeholder="Password" name="pw">
           <button type="button" class="submit" onclick="check_input()">Sign in</button>  
            <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
            <p class="sign-up" align="center"><a href="sign-up.php">Don't have id? Sign-up</a></p>
    </div>

    <?PHP include "footer.php"; ?>
</body>
</html>