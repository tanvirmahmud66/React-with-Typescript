import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function PropsAsEvent() {
  return (
    <div>
        <ButtonComponent handleClick={(event,id)=>{
            console.log("Button Clicked",event,id);
            alert("Button Clicked");
        }}/>
    </div>
  )
}
