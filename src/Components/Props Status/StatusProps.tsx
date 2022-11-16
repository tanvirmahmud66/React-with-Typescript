import React from 'react'

type StatusProps = {
  status: 'Loading' | 'Success' | 'Error'
}

export default function StatusDemo(props: StatusProps) {
  let message;
  if(props.status==='Loading'){
    message = "Loading...";
  }
  if(props.status==='Success'){
    message = "Success :)"
  }
  if(props.status==='Error'){
    message = "Error :("
  }
  return (
    <div>
      <h3>Status = {message}</h3>
    </div>
  )
}
