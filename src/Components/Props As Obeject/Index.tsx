import React from 'react'
import Person from './Person'

const fullName = {
    firstName: "Tanvir Mahmud",
    lastName: "Fahim"
}

export default function PropsTypeObject() {
  return (
    <div>
        <Person name={fullName}/>
    </div>
  )
}
