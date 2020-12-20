window.onload=function(){
    var AD=document.getElementsByClassName('AD_img')[0];
    //마우스 오버이벤트
    AD.addEventListener('mouseover',function(){
        
    });
    //마우스 아웃이벤트
    AD.addEventListener('mouseout',function(){
        
    });
    var img = document.getElementsByTagName('article');
        for(var x=0;x<img.length;x++)
        {
            img.item(x).onclick=function(){window.open(this.style.background-image)};
        }
}