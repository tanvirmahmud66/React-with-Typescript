import React from 'react'
import { ExtractComponentProps } from './ExtractComponentProps'
import PropsComponent from './PropsComponent'

export const ExtractPropsHere = () => {
  return (
    <div>
        <PropsComponent username='tanvir66' email='tanvirmahmudfahim1313@gamil.com' password='234234'/>
        <ExtractComponentProps username='fahimCSE' email='tanvirmahmud.cse66@gmail.com' password='234234'/>
    </div>
  )
}
