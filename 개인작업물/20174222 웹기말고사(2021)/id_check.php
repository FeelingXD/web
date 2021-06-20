<?php
include "db.php";
	$id = $_POST['userid'];

	if($_POST['userid'] != NULL){
		
		$sql = "SELECT * FROM USER_INFO where user_id= '$id'";
		$s = oci_parse($conn, $sql);
		oci_execute($s);
		$id_check = $s;
		$id_check = oci_fetch_array($id_check);
	
	if($id_check >= 1){
		echo "존재하는 아이디입니다.<script>document.getElementsByName('checkid').value = 0;</script>";
	} else {
		echo "존재하지 않는 아이디입니다.<script>document.getElementsByName('checkid').value = 1;</script>";
	}
	
}
else
	echo "아이디를 확인해주세요.<script>document.getElementsByName('checkid').value = 0;</script>";
?>