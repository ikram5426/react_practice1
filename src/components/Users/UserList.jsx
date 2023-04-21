import React from 'react'
import Card from '../UI/Card'
import style from './userList.module.css'

function UserList(props) {
  return (
    <Card style={style.users}>
      <ul>
        {props.users.map((user) =>{
        return  <li key={user.name}>
            {user.name} ({user.age} is years old)
          </li>
        })}
      </ul>
    </Card>
  )
}

UserList.propTypes = {}

export default UserList
