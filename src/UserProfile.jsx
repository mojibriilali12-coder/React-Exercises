
import React, {useContext} from 'react'
import UserContext from './UserContext'

const UserProfile = () => {

  const user = useContext(UserContext)

  return (
    <div>
      <h2>Userprofile</h2>
      <h3>{user.name}</h3>
    </div>
  )
}

export default UserProfile

