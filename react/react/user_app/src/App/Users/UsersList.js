import React from 'react';
import UserListItem from './UsersListItem'

const UsersList =(props) => {

    return (
        <ul className="collection">
        {props.users.map((user, i) => {
            return <UserListItem user={user} key={i}/>
        })}
        </ul>
    )
}


export default UsersList