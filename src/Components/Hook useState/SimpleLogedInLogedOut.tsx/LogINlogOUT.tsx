import React, { useState } from 'react'

export const LogINlogOUT = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = ()=>{
        setIsLoggedIn(true);
    }
    const handleLogOut = ()=>{
        setIsLoggedIn(false);
    }

  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log out</button>
        <div>user {isLoggedIn? "Logged In": "Logged Out"}</div>
    </div>
  )
}
