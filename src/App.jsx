// import ShoppingCart from "./ShoppingCart";

import { useEffect, useState } from "react";

function App(){
    
    const[width, setWidth]=useState(window.innerWidth)

  
    
    useEffect(()=>{
        
       const handleResize= ()=> setWidth(window.innerWidth)


        window.addEventListener('resize', handleResize)

        return()=>{
         
            window.removeEventListener("resize", handleResize)
        }
     
    },[])


     

    return(
       <div>
        <p>window width {width}px</p>
       </div>
    )
}

export default App;