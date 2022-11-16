import React from 'react'
import InputField from './InputField'

export default function PropsAsOnChangeEvent() {
  return (
    <div>
        <InputField value='' handleChange={(event)=>console.log(event.target.value)}/>
    </div>
  )
}
