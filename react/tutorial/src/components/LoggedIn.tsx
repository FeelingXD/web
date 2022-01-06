import { useState } from "react"



export const LoggedIn = () => {
    const [isLoggedIn,setIsLoggedin] = useState(false);

    
    const handleLogin = () => {
        setIsLoggedin(true)
    }
    const handleLogout = () => {
        setIsLoggedin(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}