import React from 'react'
import { Box } from './Box'
import { ThemeContextProvider } from './ThemeContext'




export const HooksUseContext = () => {
  return (
    <div>
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>
    </div>
  )
}
