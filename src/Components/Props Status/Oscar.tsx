import React from 'react'

type OscarProps = {
    children: string
}

export default function Oscar(props: OscarProps) {
  return (
    <div>{props.children}</div>
  )
}
