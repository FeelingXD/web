export
type Player<E>={
    name:string,
    extracInfo:E
}
type nicoExtra ={
    favFood:string
}
type nicoPlayer = Player<nicoExtra>
const nico:nicoPlayer ={
    name:"nico",
    extracInfo:{
        favFood:"kimchi"
    }
}

const lynn:Player<null>={name:"Lynn", extracInfo:null}
console.log(nico)
console.log(lynn)