import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

 function ThemeComponent() {

  const theme =  useContext(ThemeContext)


 const style={
    
    backgroundColor: theme === 'light' ?  "#ffff": "#333",
    color: theme === "light" ? "#000" : "#ffff",
    padding: "20px",
    textAlign: "center",
 }

  return (
    <div>
        <h1 style={style}>This is {theme}-themed component</h1>
      
    </div>
  )
}


export default ThemeComponent