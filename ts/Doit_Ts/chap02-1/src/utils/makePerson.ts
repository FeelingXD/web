export function makePerson(name: string,age:number){
    return{name: name, age: age}
}
export function testMakeperson(){
    console.log(
        makePerson('Jane',22),
        makePerson('Jack',33)
    )
}