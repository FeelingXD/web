/**
 * javscript map method()
 * javascript map method((e) => return ) 배열객체에서 새로운 배열을 반환
 */
let arr = [1, 2, 3, 4];
console.log(arr.map((e) => e * 3)); //map => array 원소에대한 콜백함수를 실행한다.
let obj_arr = [
  { firstname: "casdian", lastname: "kim" },
  { firstname: "gooby", lastname: "kim" },
  { firstname: "Envy", lastname: "kim" },
];
for (var i of obj_arr) {
  console.log("🚀 ~ file: map.js:13 ~ i", i);
}

obj_arr.map((e) => e.firstname);
console.log(
  "🚀 ~ file: map.js:16 ~ obj_arr.map(e=>e.firstname)",
  obj_arr.map((e) => e.firstname)
);

obj_arr.map((e) => e.firstname + e.lastname);
console.log(
  "🚀 ~ file: map.js:23 ~ obj_arr.map((e) => e.firstname + e.lastname);",
  obj_arr.map((e) => `${e.firstname}_${e.lastname}`)
);

/**
 *  filter
 *  callback 함수의 true 값을 반환하는 값만 return 하여 새로운 배열반환
 */

const fruits = [`Apple`, `Banana`, `Lemon`, `WaterMelon`];
const fruitFilter = fruits.filter((word) => word.length >= 6);
console.log("🚀 ~ file: Array.js:34 ~ fruitFilter", fruitFilter);

/**
 *  reduce
 *
 */
const numbers = [1, 2, 3, 4];
const nubmersSum = numbers.reduce((acc, cur) => {
  console.log("🚀 ~ file: Array.js:43 ~ acc,cur", acc, cur);
  return acc + cur;
}, 10);
console.log("🚀 ~ file: Array.js:46 ~ nubmersSum ~ nubmersSum", nubmersSum);

/**
 * custom reduce
 *  reducer => return acc cur
 */
const testarr = [1, 2, 3, 4];
const reducer = (arr, cur) => {
  arr + cur;
};
/* 
Array.prototype.customreduce = (callback, initval) => {
  let index = 0;
  let acc;
  initval ? (acc = initval) : ([index, acc] = [1, this[0]]);
  for (; i < this.length; i++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
}; */

testarr.customreduce(reducer);
