import React,{useContext} from 'react'
import { myContext } from './Index'


export const UserPage = () => {
    const context = useContext(myContext);
  return (
    <div>{context}</div>
  )
}
