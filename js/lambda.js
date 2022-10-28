// lambda 식
// 1. 람다는 이름을 가질 필요가없다.(익명함수)
// 2. 두 개 이상 입력이 있는 함수는 최종적으로 1개만 입력받는 람다 대수가 될수있다.(커링)
// 3. 함수형 프로그래밍 코드를 단순화 할수있음
// 예제

const  a= [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Berylium"
];

const a2 = a.map(function(s){return s.length});
console.log(a2)
const a3 = a.map( s => s.length );
console.log(a3)
a4= a.filter(a => a.length>6)
console.log(a4)