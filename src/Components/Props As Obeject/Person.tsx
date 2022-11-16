import React from 'react'

type personProps = {
    name:{
        firstName: string,
        lastName: string
    }
}

export default function Person(props: personProps) {
  return (
    <div>Hello {props.name.firstName} {props.name.lastName}</div>
  )
}
