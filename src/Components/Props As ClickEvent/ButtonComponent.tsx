import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number)=> void
}

export default function ButtonComponent(props: ButtonProps) {
  return (
    <button onClick={(event)=>props.handleClick(event,2)}>click</button>
  )
}
