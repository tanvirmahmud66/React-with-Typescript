import React from 'react'

type PropsType = {
    username: string,
    email: string,
    password: string
}

export default function PropsComponent({username, email, password}: PropsType) {
  return (
    <div>
        <p>{username}</p>
        <p>{email}</p>
        <p>{password}</p>
    </div>
  )
}
