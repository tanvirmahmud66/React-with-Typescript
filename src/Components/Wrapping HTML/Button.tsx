import React from 'react'

type CustomButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export default function CustomButton({variant, children, ...rest}: CustomButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}
