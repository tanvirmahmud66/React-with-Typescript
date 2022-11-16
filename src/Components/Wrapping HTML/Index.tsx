import React from 'react'
import CustomButton from './Button'

export default function WrappingHTML() {
  return (
    <div>
        <CustomButton variant='primary' onClick={()=>console.log("button clicked")}>
            primary button
        </CustomButton>
    </div>
  )
}
