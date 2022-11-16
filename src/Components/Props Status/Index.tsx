import React from 'react'
import Heading from './Heading'
import Oscar from './Oscar'
import StatusDemo from './StatusProps'

export default function PropsStatusIndex() {
  return (
    <div>
        <StatusDemo status="Error"/>
        <Heading>
          <Oscar>Oscar goes to Tanvir Mahmud Fahim</Oscar>
        </Heading>
    </div>
  )
}
