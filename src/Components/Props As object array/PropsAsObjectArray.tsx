import React from 'react'

type personListProps = {
    names:{
        firstName: string,
        lastName: string
    }[]
}

export default function PersonList(props: personListProps) {
  return (
    <div>
        {
            props.names.map((each)=>{
                return <h3>{each.firstName} {each.lastName}</h3>
            })
        }
    </div>
  )
}
