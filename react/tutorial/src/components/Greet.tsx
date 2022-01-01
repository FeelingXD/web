type GreetProps ={
    name:string
    message:number
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) =>{
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcom ${props.name} tutorial jimin. you have ${props.message} unread message` : ''
                } 
             </h2>
        </div>
    )
}
