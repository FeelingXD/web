export
type Add ={
    (a:number , b :number) : number
    // (a:number , b :number) : number
    (a:number , b :number,  c:number): number
}
const add:Add = (a,b,c?:number) =>{
    if(c) return a+b+c
    return a+b
}

console.log(add(1,2))
console.log(add(1,2,3))
