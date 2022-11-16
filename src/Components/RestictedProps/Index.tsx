import React from 'react'
import Test from './RestictedPropsTest'

export default function RestrictedPropsTest(){
  return (
    <div>
        <Test value={23} isPositive/>
        <Test value={-23} isNegative/>
        <Test value={0} isZero/>
    </div>
  )
}
