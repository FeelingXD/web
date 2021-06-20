<?php
session_start();
include_once "db.php";
error_reporting(E_ALL^ E_WARNING);
$result = oci_parse($conn,"SELECT * from (select *from NOTICE order by ID desc) where rownum <=1");
oci_execute($result);
$rows_main = oci_fetch_array($result);

//  페이징 
if (isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = 1;
}

$q1 = oci_parse($conn,"SELECT * from NOTICE");
oci_execute($q1);
$exnum = 1;
while(($row = oci_fetch_array($q1)) != false)
{    
    $exnum++;
} 

$total_home_sub1_record = $exnum; //공지 총 갯수
$list = 10; // 표시 게시물
$block_cnt = 5; // 블록당 페이지수
$block_num = ceil($total_home_sub1_record / $block_cnt);
$block_start = (($block_num - 1) * $block_cnt) + 1; // 블록시작
$block_end = $block_start + $block_cnt - 1; // 블록 마지막

$total_page = ceil($total_home_sub1_record / $list);

if ($block_end > $total_page) {
    $block_end = $total_page;
}

$total_block = ceil($total_page / $block_cnt);
$page_start = ($page - 1) * $list;

$query = "SELECT SEQ ,ID, CONTENTS, WRITER ,title, ntime
FROM(
    SELECT SEQ, ID, CONTENTS, WRITER , title, ntime
    FROM(
        SELECT ROWNUM AS SEQ, ID, CONTENTS, WRITER, title, to_char(N_time,'YY-MM-DD-HH24-MI')as ntime
        FROM(
            SELECT *
            FROM NOTICE ORDER BY ID DESC
         )
    )WHERE SEQ >= $page_start
)WHERE ROWNUM <=$list";
$sql_home_sub1 = oci_parse($conn,$query);
oci_execute($sql_home_sub1);

?>
 <script type="text/javascript" src="./js/common.js"></script>
<style>
    #home_main {
        background-color: #f0c274;
        width: 100%;
        height: 25%;
        color: white;
    }

    #home_sub1 {
        background-color: #f0c274;
        float: left;
        width: 100%;
        height: 75%;

        
    }

    #home_main_title {
        height: 10%;
		color: black;
    }

    #home_main_content {
        width: 100%;
        height: 90%;
        border: 4px solid #E6A055;
        background-color: green;
        color: white;
        box-sizing: border-box
    }
    thead{
        color:white;
    }
</style>
<div id="home_main">
    <div id="home_main_title">
        최근공지사항
    </div>
    <div id="home_main_content">
            <?php
            if (!isset($rows_main['CONTENTS'])) {
                echo "등록된 공지사항이 없습니다.";
            } else 
				echo '<br>';
				echo '제목:'; echo $rows_main['TITLE']; echo '<br>'; echo '<br>';
                echo '내용:'; echo $rows_main['CONTENTS'];
            ?>
		</div>
	</div>
<div id="home_sub1">
    <!-- 공지메뉴-->
    <table class="style1">
        <thead>
			<th>공지 번호</th>
			<th>제목</th>
			<th>작성자</th>
            <th>작성날짜</th>
		</thead>
            <?php
            while ($board = oci_fetch_array($sql_home_sub1)) {
                $content = $board['TITLE'];
                if (strlen($board['TITLE'] > 30)) {
                    $content = str_replace($board['TITLE'], mb_substr($board["TITLE"], 0, 30, "utf-8") . "...", $board['TITLE']);
                }
                $time=explode('-', $board['NTIME']);
            ?>
        
        <tbody>
            <tr text align="center">
                <!-- 내용 첨부할것 -->
                <td><?= $board['ID']?></td>
                <td><a href="view_notice.php?id=<?=$board['ID']?>"><?= $board['TITLE']?></a></td>
                <td><?= $board['WRITER']?></td>
                <td><?= $time[0].'/'.$time[1].'/'.$time[2] ?></td>
            </tr>
        </tbody>
    <?php
            }
    ?>
    </table>
    <nav>
        <ul align="center"; class="paging">
            <?php
            if ($page <= 1) {
                // 빈 값
            } else {
                if (isset($unum)) {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=1' aria-label='Previous'>처음</a></li>";
                } else {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=1' aria-label='Previous'>처음</a></li>";
                }
            }

            if ($page <= 1) {
                // 빈 값
            } else {
                $pre = $page - 1;
                if (isset($unum)) {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$pre'>◀ 이전 </a></li>";
                } else {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$pre'>◀ 이전 </a></li>";
                }
            }

            for ($i = $block_start; $i <= $block_end; $i++) {
                if ($page == $i) {
                    echo "<li class='page-item'><a class='page-link' disabled><b style='color: #df7366;'> $i </b></a></li>";
                } else {
                    if (isset($unum)) {
                        echo "<li class='page-item'><a class='page-link' href='./index.php?page=$i'> $i </a></li>";
                    } else {
                        echo "<li class='page-item'><a class='page-link' href='./index.php?page=$i'> $i </a></li>";
                    }
                }
            }

            if ($page >= $total_page) {
                // 빈 값
            } else {
                $next = $page + 1;
                if (isset($unum)) {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$next'> 다음 ▶</a></li>";
                } else {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$next'> 다음 ▶</a></li>";
                }
            }

            if ($page >= $total_page) {
                // 빈 값
            } else {
                if (isset($unum)) {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$total_page'>마지막</a>";
                } else {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$total_page'>마지막</a>";
                }
            }
            ?>
        </ul>
    </nav>
    <?php
           if ($sql_home_sub1['WRITER'] == $_SESSION['userid'] || $_SESSION['u_rank'] == '관리자') {
    ?>
    <div>
         <button id="write_content" style="border-radius: 7px; width: 50px; height: 30px; background-color:#00e6f1;">글작성</button>
    </div>
    <?php
        }
    ?>
</div>