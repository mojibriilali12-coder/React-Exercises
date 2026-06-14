// import ShoppingCart from "./ShoppingCart";

import { useEffect, useState } from "react";

function App(){
    
    const[user, setUser]=useState([])

    const[loading, setLoud]=useState(false)

    
    useEffect(()=>{

  
      const fetchUser = async()=>{
    
            setLoud(true)

         try{
     
            const response = await fetch("https://jsonplaceholder.typicode.com/users")

            const data = await response.json()
             
            console.log(data)
            setUser(data)
            setLoud(false)
         }catch(error){
            console.log('error', error)
         }
      }

      fetchUser()

    },[])
  
   
     if(loading) return <h1>Loading...</h1>
    
    return(
      <div>
       <h2>List of Users</h2>
       <ul>
         {
            user.map((u)=>(
             
               <li>{u.name}</li>
            ))
         }
       </ul>
      </div>
    )
    
    
}

export default App;