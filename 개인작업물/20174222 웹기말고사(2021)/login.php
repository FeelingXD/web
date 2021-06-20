<!-- 로그인 -->
<?php
var_dump($_REQUEST);
session_start();
include_once "db.php";
//id ,pw
    $id = $_POST['id'];
    $pw = $_POST['pw'];

    // check
    $query = "select * from user_info where user_id ='$id'";
    $stid = oci_parse($conn, $query);
    $stat=oci_execute($stid);
    $row = oci_fetch_assoc($stid);
    var_dump($row);
    if ($row['USER_PW'] == $pw) {
        $_SESSION['userid'] = $id;
        $_SESSION['nick']= $row['USER_NICK'];
        if (isset($_SESSION['userid'])) {
            $_SESSION['u_rank'] = $row['USER_RANK'];
    ?>
            <script>
                alert('환영합니다.');
                location.replace('index.php');
            </script>
        <?php
        } else {
            echo "session failed";
        }
    } else {
        ?>
        <script>
            alert('아이디와 비밀번호를 확인해주세요.');
            history.back();
        </script>
    <?php
    }
?>