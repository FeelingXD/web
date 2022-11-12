/* array type */
let a: number[] =[1,2]
let b: string[] = ['name','age']
let c: boolean[] = [true]
//  object
const new_type: object={
    type:'boolean'
}
type Name= String
type Age =number
type Player={
    readonly name:Name,
    age?:Age
}

// const nico:Player={
//     name:"nico"
// }

// const lynn:Player={
//     name:'lynn',
//     age:12
// }

function playerMaker(name:String):Player{
    return{
        name
    }
}
// const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker('nico')
nico.age=12
//nico.name ="las" = > readonly error!

const numbers :  number[] =[1,2,3,4]
numbers.push(1)

//tuples
const player_ex3: [string,number,boolean] = ["nico",12,false]
console.log(player_ex3)
function undeAndnull(){
    let a: undefined =undefined
    let b: null =null
}

function anytest(){
    const a : any[] =[1,2,3,4]
    const b : any =Boolean
    console.log(a+b)
}
anytest()

function moretypes(){ //function return void
    let a: unknown
    if(typeof a==='number'){
        let b= a+1
    }
    if(typeof a==='string'){
        let b =a.toUpperCase();
    }
} 
function nevertest(name:string|number){
    if(typeof name==='string'){
        name
    }
    else if(typeof name ==="number"){
        name
    }
    else{
        name //type : never / never ever runnable.:(
    }
}
