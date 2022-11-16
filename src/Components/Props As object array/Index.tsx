import React from 'react'
import PersonList from './PropsAsObjectArray'

const names = [
    {
        firstName: "Tanvir",
        lastName: "Mahmud"
    },
    {
        firstName: "Maruf",
        lastName: "Mahmud"
    },
    {
        firstName: "Owasfi",
        lastName: "Yousuf"
    }
]


export default function PropsTypeArrayObject() {
  return (
    <div>
        <PersonList names={names}/>
    </div>
  )
}
