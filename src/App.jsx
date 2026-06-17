// import ShoppingCart from "./ShoppingCart";

// import { useEffect, useState } from "react";

function App(){
    
   const todos =[

    {id:1,text:"Learn React"},
    {id:1,text:"Build a Project"},




   ];
    
    return(
      <ul>
      {
       todos.map((todo, index) =>(
          <li key={todo.id}>{todo.text}</li>
        ))
      } 
      </ul>
  );
}
export default App;