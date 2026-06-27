import { useEffect, useState} from "react";


const UseFetch=(url)=>{

const[data, setData]=useState(null)
const[loading,setLoad]=useState(true)
const[error, setError]=useState(null)




useEffect(()=>{

let isMounted=true

const fetchData = async()=>{
  try{
    const response = await fetch(url)

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }
  
    const result = await response.json()
  

}catch(error){


    if (isMounted){

        setData(result)
        setLoad(false)
    }

}


}

 fetchData()

 return ()=>{
    isMounted = false
 }

},[url])

return {data, loading, error}

}

export default UseFetch;