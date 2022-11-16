import React,{useState} from 'react'


type Auth = {
    userName: string,
    userEmail: string
}

export const Another = () => {

    const [user, setUser] = useState<Auth>({} as Auth);

    const handleLogin = ()=>{
        setUser({
            userName: "Tanvir Mahmud",
            userEmail: "tanvir@dymesoft.com"
        })
    }

  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
        <div>{user.userName}</div>
        <div>{user.userEmail}</div>
    </div>
  )
}
