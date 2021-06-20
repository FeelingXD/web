<?
include_once 'db.php';
include 'header.php';
$category =$_GET['category'];
$query = "select * from content where content_category = $category ";
$result  = oci_parse($conn, $query);
$stat = oci_execute($result);
$board_community = oci_fetch_array($result);
?>
<section id="AD">
    <h1>🐋AD</h1>
    <div class="AD_img">
    </div>
</section>
<section id="content1">
    <nav class="nav">
        <ul>
            <h1>MENU✨</h1>
            <li><a href="#">👀NOTICE&📰NEWS</a></li>
            <li><a href="#">🎧MUSIC</a></li>
            <li><a href="#">🎨ARTWORK</a></li>
            <li><a href="#">🤣COMMUNITY</a></li>
        </ul>
    </nav>
    <div id="content_article">
        <article class="article_right1" style="height: 500px;">
            <h1><?php 
                if (trim($category) == 'notice'){
                   
                    echo "👀NOTICE&📰NEWS";
                }
                else{
                    
                    echo "🤣COMMUNITY";
                }
            ?></h1>
            <div id="content">
            <table>
                    <th>제목</th>
                    <th>작성자</th>
                    <?php
                    $query_notice = "select * from (select * from content where content_category = '$category' order by content_num desc)";
                    $result  = oci_parse($conn, $query_notice);
                    $stat = oci_execute($result);
                    while ($board_notice = oci_fetch_array($result)) {
                        $content = $board_notice['CONTENT_TITLE'];
                        $id = $board_notice['CONTENT_NUM'];
                        
                        if (!$board_notice) {
                            echo "작성된 글이 없습니다.";
                        } else {
                    ?>
                            <tbody>
                                <tr text-align="center">
                                    <td><a href="content_view.php?id=<?= $id ?>"><?= $board_notice['CONTENT_TITLE']?></a></td>
                                    <td><?= $board_notice['CONTENT_WRITER'] ?></td>
                                </tr>
                            </tbody>
                    <?php
                        }
                    }
                    ?>
                </table>
                <?php
                if(($_SESSION['nick']&&$category!='notice')||$_SESSION['u_rank']=='admin'){
                    ?>
                <button onclick="location.href='write_content.php?category=<?=$category?>'">글쓰기</button>
                    <?php
                }
                
                ?>
            </div>
    </div>
</section>
<section id="content3">
    <h1>🎨ARTWORK</h1>
    <article class="article_square1"></article>
    <article class="article_square2"></article>
    <article class="article_square3"></article>
    <article class="article_square4"></article>
</section>
<?php include 'footer.php';?>