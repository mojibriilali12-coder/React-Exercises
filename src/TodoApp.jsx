
import React, {useReducer}  from 'react'

import TodoContext from './TodoContext'

import { initialState, reducer } from './reducer'

import {TodoFom} from './TodoFom'
import {TodoList} from './TodoList'

export const TodoApp = () => {

   const [state,dispatch]=useReducer(reducer,initialState)


  return (

    <TodoContext.Provider value={{state,dispatch}}>
       <div>
        <h2>TodoApp with contect and reducer</h2>
        <TodoFom/>
        <TodoList/>
       </div>
     </TodoContext.Provider>
  )
   
     

  
}




