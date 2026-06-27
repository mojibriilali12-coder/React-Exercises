import UseFetch from "./UseFetch"

const Posts =()=>{

  const { data, loading, error }=  UseFetch(`https://jsonplaceholder.typicode.com/posts`)

  
  if(loading) return <h2>Loading</h2>

    return
    <h2>Posts</h2>
}

export default Posts;