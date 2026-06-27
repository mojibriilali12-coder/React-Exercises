import UseFetch from "./UseFetch"


const GitHub =()=>{


  const {data, loading, error}=UseFetch(`https://api.github.com/users/mojibriilali12-coder`)

    if(loading) return <h2>Loading....</h2>

    return(
        <h2>{data.name}</h2>
        
    )
}

export default GitHub;