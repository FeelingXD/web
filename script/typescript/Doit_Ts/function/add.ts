export type NumberToNumberFunc = (arg0: number) =>number
export const add =(a:number):NumberToNumberFunc =>{
    
    const _add:NumberToNumberFunc = (b:number):number =>{
        return a=a+b
    }
    return _add
}

let plus1=add(1)
console.log(plus1(2))
console.log(plus1(2))
console.log(plus1(2))
console.log(plus1(2))
console.log(plus1(2))