// import ShoppingCart from "./ShoppingCart";

import { useEffect, useState } from "react";

function App(){
    
    const[title, setTitle]=useState("hello")

     const[name, setName]=useState("")
    
    useEffect(()=>{
        document.title = name ? `${title} ${name}` : "Welcome";
        
     
    },[title,name])


     

    return(
       <div>
        <h2>Type this</h2>
         <input type="text"  value={name} onChange={(e) =>  setName(e.target.value)} />
        <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} />
       </div>
    )
}

export default App;