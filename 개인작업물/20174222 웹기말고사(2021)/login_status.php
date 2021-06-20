<?php

include_once "db.php";
error_reporting(0);
session_start();
if (!$_SESSION['nick']) {
    echo "<div id='login_status'><a href='loginbox.php'>로그인</a></div>";
} else {
    echo "<div id='ogin_status'>환영합니다." . $_SESSION['nick'] . "님"; //div start
?>
    <button onclick="location.href='logout.php'">로그아웃</button>
    </div>
<?php
    }
?>