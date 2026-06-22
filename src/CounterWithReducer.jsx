import { use } from "react";
import { useState, useReducer } from "react";



const initialState={count :0}


const reducer =(state, action)=>{
    switch(action.type){
        case "decrement":
            return{count: state.count + 1}

            case "increment":
                return{count: state.count - 1}

                case "reset":
                    return initialState

                default:
                    return state
    }
}

const CounterWithReducer =()=>{

     const[counter,setCounter]=useState(0)
     const[state, dispatch]=useReducer(reducer,initialState)

    
     

    return(
        <div>
        <h2>count : {state.count}</h2>
       <button onClick={()=>dispatch({type:"decrement"})}>Increment</button>
               
       <button onClick={()=>dispatch({type:"increment"})}>Decrement</button>
       <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
       

}


export default CounterWithReducer;