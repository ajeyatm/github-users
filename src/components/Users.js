import { useState, useEffect } from 'react'
import './Users.css'

const Users = () => {
  const url = 'https://api.github.com/users'

  let [users, setUsers] = useState([]) // state of component
  //state variable
  //setting a value to a state varibale will trigger/cause component render

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data) //users = data
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='users_container'>
      {users.map((usr) => {
        return (
          <div className='user' key={usr.login}>
            <a href={usr.html_url} target='_blank'>
              <img src={usr.avatar_url} className='user_img' alt={usr.login} />
            </a>
            <div className='user_login'>{usr.login}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Users
