import React from 'react'
export type ProfileType = {
    name: string
}
export const Profile = ({name}:ProfileType) => {
  return (
    <div>This is Private Profile. This is {name}'s Profile</div>
  )
}
