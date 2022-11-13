export
type Superprint = <T>(a: T[]) => T

const superPrint:Superprint = (a)=> a[0]
const a=superPrint([1,2,3,4])
console.log(a)