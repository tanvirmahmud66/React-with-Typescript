import React from 'react'
import { List } from './List'

export const GenericList = () => {
  return (
    <div>
        <List items={["SpiderMan","IronMan","SuperMan","BatMan"]} onClick={(item)=>console.log(item)}/>
        <List items={[2,53,53,63,6]} onClick={(item)=>console.log(item)}/>
        <List items={[
            {
                first: "Tanvir",
                last: "Mahmud"
            },
            {
                first: "Maruf",
                last: "Mahmud"
            },
            {
                first: "Wasfi",
                last: "Yousuf"
            }
        ]} onClick={(item)=>console.log(item)}/>
    </div>
  )
}
