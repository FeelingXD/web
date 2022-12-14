/* array type */
export let a: number[] = [1, 2];
let b: string[] = ["name", "age"];
let c: boolean[] = [true];
//  object
const new_type: object = {
  type: "boolean",
};
type Name = String;
type Age = number;
type Player = {
  name: Name;
  age?: Age;
};

// const nico:Player={
//     name:"nico"
// }

// const lynn:Player={
//     name:'lynn',
//     age:12
// }

function playerMaker(name: String): Player {
  return {
    name,
  };
}

const nico = playerMaker("nico");
nico.age = 12;
console.log(nico.age);
