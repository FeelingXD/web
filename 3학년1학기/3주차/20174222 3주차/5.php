<?php
 function facto($i)
 {
    if($i<=1) return 1;
    return $i * facto($i-1);
 }
 for($num=1;$num<=10;$num++)
 {
     echo "$num! =";
     echo facto($num),"\n";
 }
?>