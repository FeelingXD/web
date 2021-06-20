<?php
include_once 'db.php';
$id = $_GET['id'];
include 'header.php';

$query = "select * from content where content_num = $id ";
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
            <h1>title : <?= $board_community['CONTENT_TITLE']; ?></h1>
            <div id="content">
                내용 : <?= $board_community['CONTENT_CONTENT']; ?>
            </div>
            <?php if ($board_community['CONTENT_WRITER'] == $_SESSION['nick'] || $_SESSION['u_rank'] == 'admin') {
            ?>
                <button onclick="location.href='del_content.php?id=<?= $id ?>'">삭제</button>
            <?php
            }
            ?>

    </div>
</section>
<section id="content3">
    <h1>🎨ARTWORK</h1>
    <article class="article_square1"></article>
    <article class="article_square2"></article>
    <article class="article_square3"></article>
    <article class="article_square4"></article>
</section>
<?php include 'footer.php'; ?>