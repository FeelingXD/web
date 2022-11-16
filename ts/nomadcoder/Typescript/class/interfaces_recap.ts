export
type PlayerA={
    name :string
}
type PlayerAA = PlayerA&{
    lastname:string
}
const playerA:PlayerAA ={
    name:"nico",
    lastname:"las"
}
interface PlayerB{
    name:string
}
const playerB: PlayerB ={
    name:"lynn"
}
interface PlayerBB extends PlayerB{
    lastname:string
}
