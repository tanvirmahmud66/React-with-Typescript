import React from 'react'
import { User } from './User'
import { UserContextProvider } from './UserContextProvider'

export const UseContextAnotherExample = () => {
  return (
    <div>
        <UserContextProvider>
            <User/>
        </UserContextProvider>
    </div>
  )
}
