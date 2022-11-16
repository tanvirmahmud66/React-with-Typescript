import React from 'react'

type GreetingProps = {
    name: string,
    messageCount?: number
}

export default function Greeting(props: GreetingProps) {
    let message = 0;
    if(props.messageCount){
        return <div> Hello {props.name}, Unread Message is: {props.messageCount}</div>
    }
    return <div>Hello {props.name}, Unread Message is: {message}</div>

}
