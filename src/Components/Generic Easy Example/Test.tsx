import React from 'react'

type TestProps<T> = {
    item: T[]
}

export default function Test <T>({item}: TestProps<T>){
  return (
    <>
        {item.map((each)=>{
            return <div>{JSON.stringify(each)}</div>
        })}
    </>
  )
}
