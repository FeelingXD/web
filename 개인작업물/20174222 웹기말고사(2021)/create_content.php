<?
    session_start();
    include_once 'db.php';
   $writer=$_SESSION['nick'];
   $content= $_POST['content'];
   $title=$_POST['title'];
    $category =$_GET['category'];
  var_dump($_SESSION);

   $query = "insert into content values(content_num.nextval,'$title','$writer','$content','$category')";
    $result  = oci_parse($conn, $query);
    $stat = oci_execute($result);
    if($stat)
    {
        ?>
        <script>
            alert('등록되었습니다.');
            location.href='index.php'
        </script>
        <?php
    }
    else
    {
        ?>
        <script>
            alert('error code = 1001');
        </script>
        <?
    }
?>