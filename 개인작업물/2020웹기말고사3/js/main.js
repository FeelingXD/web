
window.onload=function(){
    alert('환영합니다.');
    var AD=document.getElementsByClassName('AD_img')[0];
    //마우스 오버이벤트
    AD.addEventListener('mouseover',function(){
        
    });
    //마우스 아웃이벤트
    AD.addEventListener('mouseout',function(){
        
    });
    //이미지 클릭시 원본 링크 새창출력
    var img = document.getElementsByTagName('img');
        for(var x=0;x<img.length;x++)
        {
            img.item(x).onclick=function(){window.open(this.src,"PopupWin", "width=500,height=600")};
        }
    //미구현 기능 알림
    
        
   
    
    var a_tag= document.getElementsByTagName('a');
    for (x=0;x<change.length;x++)
        {
            
        }
}