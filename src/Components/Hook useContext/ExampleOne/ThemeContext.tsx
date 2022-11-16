import React, {createContext} from "react";
import { theme } from "./theme";


type themeContextProvider = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: themeContextProvider)=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}