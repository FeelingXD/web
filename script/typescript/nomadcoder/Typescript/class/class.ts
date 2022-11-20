import { userInfo } from "os"

export

abstract class User{

    constructor(
        private firstname:string,
        private lastname:string,
        public nickname:string
    ){}
    getfullname():String{
        return `${this.firstname} ${this.lastname} 입니다.`
    }
    abstract getnickname():string
    
    static ping(){
        console.log("pong!")
    }

}
User.ping()


class Player extends User{
    getnickname(): string {
        return `${this.nickname} 입니다.`
    }
}

abstract class Person{
	name:string
    constructor(name:string)
    {
        this.name=name
    }
  	sayHello(){
    	// console.log( `hi myname is ${this.name}`);
        return `hi myname is ${this.name}`
    }
}

class American extends Person{

    constructor(name:string){
        super(name)
    }
    sayHello(){
        return `hi myname is ${this.name} imma American`
    }
}

class Korean extends Person{
    constructor(name:string){
        super(name)
    }
    sayHello(){
        return `hi myname is ${this.name} imma Korean`
    }
}
const jack = new American(`jack`)
jack.sayHello() // -> "hi myname is jack imma American" 
const jimin = new Korean(`jimin`)
console.log(jimin.sayHello()); // -> "hi myname is jimin imma Korean"

const nico:Player =new Player(`nico`,`las`,`ipnida`)
console.log(nico);
