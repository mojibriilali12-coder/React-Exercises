import { useState } from "react";
import Header  from "./Header";

import UserContext from "./UserContext";

function App(){
    
   const [user, setUser] = useState({name:"ali", role:"admin"})
    return(
      <UserContext.Provider value={user}>
      <h2>My Application</h2>
      
      <Header/>
      </UserContext.Provider>
    )
}

     
     
export default App;