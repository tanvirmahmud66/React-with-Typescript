import React from 'react'
import { personProps } from './Person.types'


export const Person = (props: personProps) => {
    const {username,password} = props;
  return (
    <div>
        <h3>Your username: {username}</h3>
        <h3>Your password: {password}</h3>
    </div>
  )
}
