import React from 'react'
import { Login } from './Login'
import { Private } from './Private'
import { Profile } from './Profile'

export const Authentication = () => {
  return (
    <div>
        <Private isLoggedIn={true} component={Profile}/>
        <Private isLoggedIn={false} component={Login}/>
    </div>
  )
}

