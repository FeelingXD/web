// 클로저 
function getClosure(){
    var text = 'vaiable 1'; // 내부의 선언된변수
    return function(name){
        return name ? name:text; // 값을 반환하는 함수 
    }
}
var closure = getClosure();
console.log(closure());
console.log(closure('test'));
console.log(closure());
