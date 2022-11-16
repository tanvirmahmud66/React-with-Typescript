import React from 'react'
import Greeting from './Greeting'

export default function OptionalProps() {
  return (
    <div>
        <Greeting name="Tanvir Mahmud" messageCount={10}/>
        <Greeting name="Tanvir Mahmud"/>
    </div>
  )
}
