window.onload =
    function(){
        var AD=document.getElementsByClassName('AD_img');
        //마우스 오버이벤트
        AD.addEventListener('over',function(){
          alert('이벤트');  
        });
        //마우스 아웃이벤트
        AD.addEventListener('out',function(){
            alert('이벤트2');
        });
    }