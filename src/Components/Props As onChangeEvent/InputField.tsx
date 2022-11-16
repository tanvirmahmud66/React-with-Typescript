import React from 'react'

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export default function InputField(props: InputProps) {
  return (
    <input type="text" value={props.value} onChange={props.handleChange}/>
  )
}