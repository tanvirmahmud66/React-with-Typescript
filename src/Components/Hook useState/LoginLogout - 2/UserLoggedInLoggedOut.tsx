import React, { useState } from 'react'

type userAuth = {
    name: string,
    email: string
}


export const UserTest = () => {

    const [user,setUser] = useState<userAuth | null >(null);

    const handleLogIn = ()=>{
        setUser({
            name: "Tanvir",
            email: "tanvir@dymesoft.com"
        })
    }
    const handleLogout = ()=>{
        setUser(null);
    }

  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogout}>Log out</button>
        <div>
            <h5>{user?.name}</h5>
            <h5>{user?.email}</h5>
            <h1>{user===null?"LogOut":""}</h1>
        </div>
    </div>
  )
}
