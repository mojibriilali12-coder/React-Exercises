import { useState } from "react";

import ThemeContext from "./ThemeContext";
import ThemeComponent from "./ThemeComponent";


function App(){
    
  const [theme, setTheme]=useState("light")


   const toggleTheme =()=>{
    setTheme((prev)=>(prev === "light" ? "dark" : "light"))
   }

    return(


    
      <ThemeContext.Provider value={theme}>
        
        <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark": "light"}</button>

        <h2>Theme Context</h2>
        <ThemeComponent/>
      </ThemeContext.Provider>
    
    )
}

     
     
export default App;