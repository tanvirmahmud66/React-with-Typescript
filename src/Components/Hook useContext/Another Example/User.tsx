import React, {useContext} from 'react'
import { UserContext} from './UserContextProvider'

export const User = () => {

    const userContext = useContext(UserContext);

    const handleLogIn = ()=>{
        userContext.setState({
            name:"Tanvir Mahmud Fahim",
            email: "tanvir@dymesoft.com"
        })
    }
    const handleLogOut = ()=>{
        userContext.setState(null)
    }

  return (
    <div>
        <button onClick={handleLogIn}>Log in</button>
        <button onClick={handleLogOut}>Log out</button>
        <div>
            <div>{userContext.state?.name}</div>
            <div>{userContext.state?.email}</div>
        </div>
    </div>
  )
}
