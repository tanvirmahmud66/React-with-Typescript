import React from 'react'
import { Login } from './Login'
import { ProfileType } from './Profile'


type PrivatePropsType = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileType>
}


export const Private = ({isLoggedIn, component:Component}: PrivatePropsType) => {

    if(isLoggedIn){
        return <Component name="Tanvir Mahmud Fahim"/>
    }else{
        return <Login/>
    }

}
