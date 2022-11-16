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
}

class Player extends User{

    getnickname(): string {
        return `${this.nickname} 입니다.`
    }
}

const nico =new Player("nico","las","니꼬")

nico.nickname
nico.getfullname()

