// import ShoppingCart from "./ShoppingCart";

import { useEffect, useState } from "react";

function App(){
    
    const[time, setTime]=useState(0)

    const[isRuning, setIsruning]=useState(false)

  
    useEffect(()=>{

      let timerId;
      if(isRuning){

        timerId= setInterval(()=>{
            setTime((prev)=> prev + 1)
        },1000)
      }

     return ()=> clearInterval(timerId)

    },[isRuning])
    
   
    const handleStart=()=>{
      setIsruning(true)
    }


    const handleStop=()=>{
      setIsruning(false)
    }

    
    const handleReset=()=>{

      setIsruning(false)
      setTime(0)
    }
     

    return(
       <div>
        <h2>StopWatch {time}</h2>
       <button disabled={isRuning} onClick={handleStart}>Start</button>
      <button disabled={!isRuning}onClick={handleStop}>stop</button>
        <button onClick={handleReset}>Reset</button>
       </div>
    )
}

export default App;