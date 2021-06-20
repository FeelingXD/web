<?php
include_once "db.php";
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
        <article class="article_right1">
            <h1><a href="view_table?category=notice">👀NOTICE&📰NEWS</a></h1>
            <div id="notice">
            
                <table>
                    <th>제목</th>
                    <th>작성자</th>

                    <?php
                    $query_notice = "select * from (select * from content where content_category = 'notice' order by content_num desc) where ROWNUM <=5";
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
            </div>
        </article>
        <article class="article_right2">
            <h1><a href="view_table?category=community">🤣COMMUNITY</a></h1>
            <div id="community">
                <table>
                    <th>제목</th>
                    <th>작성자</th>

                    <?php
                    $query_community = "select * from (select * from content where content_category = 'community' order by content_num desc) where ROWNUM <=5";
                    $result  = oci_parse($conn, $query_community);
                    $stat = oci_execute($result);

                    while ($board_community = oci_fetch_array($result)) {
                        $content = $board_community['CONTENT_TITLE'];
                        $id = $board_community['CONTENT_NUM'];
                        if (!$board_community) {
                            echo "작성된 글이 없습니다.";
                        } else {
                    ?>
                            <tbody>
                                <tr text-align="center">
                                    <td><a href="content_view.php?id=<?= $id ?>"><?= $board_community['CONTENT_TITLE'] ?></a></td>
                                    <td><?= $board_community['CONTENT_WRITER'] ?></td>
                                </tr>
                            </tbody>
                    <?php
                        }
                    }
                    ?>
                </table>
            </div>
        </article>
    </div>
</section>
<section id="content3">
    <h1>🎨ARTWORK</h1>
    <article class="article_square1"></article>
    <article class="article_square2"></article>
    <article class="article_square3"></article>
    <article class="article_square4"></article>
</section>