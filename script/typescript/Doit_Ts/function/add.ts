export type NumberToNumberFunc = (arg0: number) =>number
export const add =(a:number):NumberToNumberFunc =>{
    const _add:NumberToNumberFunc = (b:number):number =>{
        console.log(a)
        return a+b
    }
    return _add
}
console.log(add(1)(2))
let plus1=add(1)
