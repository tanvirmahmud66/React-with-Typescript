import React,{createContext, useState} from 'react'
import { UserPage } from './UserPage';

export const myContext = createContext<string | null>(null);

export const EasyContextExample = () => {
    const [val, setVal] = useState<string | null>(null);
    const handleClick = ()=>{
        setVal(new Date().toDateString());
    }
  return (
    <myContext.Provider value={val}>
        <h2>Hello form home page</h2>
        <button onClick={handleClick}>Date</button>
        <UserPage/>
    </myContext.Provider>
  )
}
