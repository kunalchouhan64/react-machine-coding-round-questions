import React, { createContext, useContext } from 'react'
const themecontext = createContext('light')

const UseContextHook = () => {
    const theme = useContext(themecontext)
    console.log(theme);
    return (
        <div>
        <button style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
        Toggle Theme
      </button>
        </div>
    )
}

export default UseContextHook
