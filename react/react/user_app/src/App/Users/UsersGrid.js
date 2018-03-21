import React from 'react';
import UsersCard from './UsersCard';

const UsersGrid = (props) => {
    return (
    <div className="row">
        {props.users.map((user, i)=>{
            return <UsersCard user = {user} key = {i}/>})}
        </div>
    )
}

export default UsersGrid