import React from 'react';

const UsersListItem =(props) => {

    const email = () => {
        const originEmail = props.user.email;
        const firstPart = originEmail.substr(0, 3);
        const secondPart = originEmail.split('@')[0];
        const lastPart = originEmail.split('@')[1];
        const secondPartLast = secondPart.substr(-secondPart.length, 3);
        const finalEmail = `${firstPart}...${secondPartLast}@${lastPart}`
        return `email: ${finalEmail}`;
    }

    const date = () => {
        const year = new Date(props.user.dateOfBirth).getFullYear();
        const month = new Date(props.user.dateOfBirth).getMonth();
        const day = new Date(props.user.dateOfBirth).getDay();
        return `${day+1}.${month+1}.${year}`;
    }

    const name = `${props.user.firstName} ${props.user.surname}`

        return (
            <li className="collection-item avatar">
                <img src={props.user.picture} alt={props.user.firstName} className="circle"/>
                <span className="title">{name}</span>
                <p><i className="material-icons">email</i>{email()} <br/>
                <i className="material-icons">cake</i>{date()}
                </p>
            </li>
        )   
}


export default UsersListItem