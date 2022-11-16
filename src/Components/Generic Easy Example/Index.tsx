import React from 'react'
import Test from './Test'

const user = [
    {id: 1, name: "Tanvir", username: "tanvir66"},
    {id: 2, name: "Mahmud", username: "mahmud83"},
    {id: 3, name: "Fahim", username: "fahim334"},
    {id: 4, name: "Oasfi", username: "Oasfi"}
]


interface Exam {
    mandatory: string,
    fourth: string,
    science: string
}


const Examine: Exam[] = [
    {
        mandatory: "Bangla",
        fourth: "Biology",
        science: "Physics"
    },
    {
        mandatory: "English",
        fourth: "Higher Math",
        science: "General Math"
    }
]

export const GenericEasyExample = () => {
  return (
    <div>
        {/* <Test item = {user}/> */}
        <Test item = {Examine}/>
    </div>
  )
}
