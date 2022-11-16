import React from 'react'

type propsType = {
    name: string,
    email: string,
    age: number
}

export function PropsTypeSingle(props: propsType) {
  return (
<div> Hello {props.name}, Your Email Address is : {props.email}, and your age is: {props.age}</div>
  )
}
