<?php
var_dump($_REQUEST);
include_once "db.php";
$id = $_POST['id'];
$pw = $_POST['pw'];
$name = $_POST['name'];
$nick = $_POST['nick'];

$query = "insert into USER_INFO u (USER_NUM,USER_ID,USER_PW ,USER_NAME,USER_NICK) values(AUTO_INCREMENT.NEXTVAL,'$id','$pw','$name','$nick')";
$stid = oci_parse($conn, $query);
$stat = oci_execute($stid);
$row = oci_fetch_assoc($stid);

if ($stid) {
?>
    <script>
        alert('등록되었습니다.')
        location.href='index.php';
    </script>
<?php
}
?>