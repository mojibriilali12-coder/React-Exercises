

const ListUsers =()=>{


    const listUsers =[{
        id:1,
        name:"mohamud",
        email:"cali@gmail.com"
    }]

    return(
        <div>
            
                <ul>
    {
           listUsers.map((user) => (
           <li key={user.id}>
           
          {user.name} <br />
          {user.email}
           
           </li>
        ))
    }
</ul>
        </div>
    )

}


export default ListUsers;