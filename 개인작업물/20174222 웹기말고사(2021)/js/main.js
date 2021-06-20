$(document).ready(function() {


});

function check_input() { // login_form.php 
    if (!document.form1.id.value) {
        alert("아이디를 입력하세요");
        document.form1.id.focus();
        return;
    }
    if (!document.form1.pw.value) {
        alert("비밀번호를 입력하세요");
        document.form1.pw.focus();
        return;
    }
    document.form1.submit();
}

function check_userset() { //set_user.php

    var checkid = document.getElementsByName('checkid').value;
    if (checkid == 0 || checkid == null) {
        alert("ID 중복체크해주세요");
        return false;
    }
    if (document.form1.pw.value != document.form1.pw1.value) {
        alert('비밀번호가 일치하지않습니다.');
        return false;
    }

}
$(function() {
    $('.id').on("keyup", function() {
        var self = $(this);
        userid = self.val();
        $.ajax({
            url: "id_check.php",
            type: "post",
            datatype: "html",
            data: {
                'userid': userid
            },
            success: function(data) {
                $('#check').html(data);
            }
        });
    });
});