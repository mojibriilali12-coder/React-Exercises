// import Footer from "./footer"
// import Header from "./header"

import { useState } from "react";

const TodoList =()=>{

   const[todos, setTodos]=useState([]);
   const[inputValue, setInputValue]=useState("")


    const handleAddTodo=()=>{
    
      if(inputValue.trim()!==""){
       
         const newTodo={
      id:crypto.randomUUID(),
      text: inputValue,
      completed:false
     }

      setTodos([...todos, newTodo]);
      setInputValue("");
      console.log(todos)


      }
     
     
     
    }

    return (
      <div>
       <h2>To-Do-List</h2>
       <input type="text" placeholder="TodoList" onChange={(e)=> setInputValue(e.target.value)}/>
       <button onClick={handleAddTodo}>Add</button>


       <ul>

        {
          todos.map(todo =>(
                
             <li>{todo.text}</li>
          ))
          

          
           
        }
       
       </ul>

      </div>
    )
}

export default TodoList;




// import { useState } from "react";




// const App= ()=>{

// const[isLighton, SetLight]=useState(true)

//  const toggle =()=>{
//    SetLight(isLighton)
//  }
  
//   return(
//   <>
//    <button onClick={toggle}>{isLighton ? 'ON':'OFF'}turn off</button>
//     {isLighton && <p>Button is, {isLighton}</p>}
//   </>
//   )
// }

// export default App;