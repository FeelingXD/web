<?php
    $db_id="dbuser174222"; // DB 계정명
    $db_pw="wlals"; // DB 계정 비밀번호
    $db_name="member"; // 연결할 데이터베이스명
    $dbsid = "( DESCRIPTION = (ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP) (HOST = localhost) (PORT = 1521) ) ) 
                          (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = orcl) ) ) ";
    $conn = oci_connect($db_id,$db_pw,$dbsid,'AL32UTF8');

    
    // if($conn)
    // {
    //     echo "success connection!";
    // }
    // SQL 쿼리문  함수 mq 선언
    // function mq($sql){
    //     global $conn;
    //     $stid = oci_parse($conn,$sql);
    //     oci_execute($stid);
    // }
    // mq(쿼리) 로 결과값 받기 
?>