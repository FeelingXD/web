export
type Team = "red"|"blue"|"yellow"
type Health = 1|5|10


// type Player={
//     nickname :string,
//     team:Team,
//     health :Health
// }

interface Person{
    nickname: string,
    team:Team,
    health:Health
}

interface User{
    name:string
}

interface Player extends User{

}
const nico :Player={
    name:"nico"
}


