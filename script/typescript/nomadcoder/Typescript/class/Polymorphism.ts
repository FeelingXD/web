interface SStorage<T>{
    [key:string]:T
}
class LocalStorage<T>{
    private storage:SStorage<T> ={}
    set(key:string,value:T){
        this.storage[key] =value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string){
        return this.storage[key]
    }
    clear(){
        this.storage={}
    }
}

const stringsStorage = new LocalStorage<String> ()

stringsStorage.set("hello","how are you")
console.log(stringsStorage.get("ket"))
const booleansStorage = new LocalStorage<Boolean>()

booleansStorage.get("xxx")
booleansStorage.set("xxx",true)
console.log(booleansStorage.get("xxx"));
