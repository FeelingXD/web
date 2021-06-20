<?php
include_once "db.php";
include "header.php";
$category=$_GET['category'];
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
            <form action="create_content.php?category=<?=$category?>" method="POST">
                <h1>title : <input type="text" width="50px"name="title"></h1>
                <div id="content">
                    내용 : <input type="text" width="50px" name="content">
                </div>
                <input type="submit">
            </form>
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