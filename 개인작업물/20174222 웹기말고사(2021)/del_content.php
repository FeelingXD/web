<?php
    include_once "db.php";
    $id =$_GET['id'];

    $query = "delete from content where content_num ='$id'";
    $result  = oci_parse($conn, $query);
    $stat = oci_execute($result);
?>
<script>
    alert ('삭제되었습니다.');
    location.href='index.php';
</script>