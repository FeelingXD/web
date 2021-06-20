<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/sign-up.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script><!-- 제이쿼리 -->
    <script type="text/javascript" src="js/main.js"></script>
</head>

<body>
    <?php include "header.php"; ?>
    <div class="main">
        <p class="sign" align="center">Sign up</p>
        <form class="form1" name='form1' action="create_user.php" method="POST" onsubmit="return check_userset();">
            <input class="id" type="text" align="center" placeholder="Username" name="id">
            <div id="check" style="text-align: center;"></div>
            <input type="hidden" id="checkid"name="checkid" value="0">
            <input class="pw" type="password" align="center" placeholder="Password" name="pw">
            <input class="pw" type="password" align="center" placeholder="Password_Check" name="pw1">
            <input class="name" type="text" align="center" placeholder="Name" name="name">
            <input class="name" type="text" align="center" placeholder="Nick-name" name="nick">
            <input type="submit" class="submit" value="Sign up" >
            <!-- <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
            <p class="sign-up" align="center"><a href="sign-up.php">Don't have id? Sign-up</a></p> -->
    </div>

    <?PHP include "footer.php"; ?>
</body>

</html>