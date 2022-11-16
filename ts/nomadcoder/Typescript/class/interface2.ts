interface User {

    firstName: string,
    lastName: string

    sayHi(name: String): string
    fullName(): string

}
interface Human {
    health: number
}
class Player implements User, Human {
    constructor(
      public firstName:string,
      public lastName:string, 
      public health:number 
    ){}
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: String): string {
        return `hello ${name} my name is ${this.fullName}`
    }
}