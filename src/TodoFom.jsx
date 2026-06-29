
import React, { useState, useContext } from 'react'
import TodoContext from './TodoContext';

export const TodoFom = () => {


 const[text,setText]=useState('');
 const{dispatch}=useContext(TodoContext)

  const handleAdd=()=>{

    if(text.trim()){
     
      const newTodo ={
        id:Date.now(),
        text,
        completed:false,
      }

      dispatch({type:'add', payload: newTodo})
      setText('')
    }
  }

  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder='Enter new Todo'/>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}


