// import ShoppingCart from "./ShoppingCart";

import { useEffect, useState } from "react";

function App(){
    
    const[user, setUser]=useState()

    const[loading, setLoud]=useState(null)

    
   

  
      const getUser = async()=>{
    
            setLoud(true)

         try{
     
            const response = await fetch( "https://api.github.com/users/mojibriilali12-coder")

            const data = await response.json()
             
            console.log(data)
            setUser(data)
            setLoud(false)
         }catch(error){
            console.log('error', error)
         }
      }

     

   
  
   
     if(loading) return <h1>Loading...</h1>
    
    return(
      <div>
         <input type="text" placeholder="github User" onChange={(e)=> setUser(e.target.value)}/>
         <button onClick={getUser}>Search</button>
       {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="150"
          />

          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
export default App;