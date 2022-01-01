type GreetProps ={
    name:string
    message?:number
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) =>{
    const {message = 0} = props
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcom ${props.name} tutorial jimin. you have ${message} unread message` : ''
                } 
             </h2>
        </div>
    )
}
