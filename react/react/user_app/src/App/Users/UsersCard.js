import React from 'react';


const UsersCard =(props) => {

    const email = () => {
        const originEmail = props.user.email;
        const firstPart = originEmail.substr(0, 3);
        const secondPart = originEmail.split('@')[0];
        const lastPart = originEmail.split('@')[1];
        const secondPartLast = secondPart.substr(-secondPart.length, 3);
        const finalEmail = `${firstPart}...${secondPartLast}@${lastPart}`
        console.log(secondPart)
        return finalEmail;
    }

    const date = () => {
        const year = new Date(props.user.dateOfBirth).getFullYear();
        const month = new Date(props.user.dateOfBirth).getMonth();
        const day = new Date(props.user.dateOfBirth).getDay();
        return `Birth date: ${day+1}.${month+1}.${year}`;
    }


    return (
        <div className="col s4 m4">      
        <div className="card">
          <div className="card-image">
            <img src={props.user.picture} alt={props.user.firstName}/>
            <span className="card-title">{props.user.firstName}</span>
          </div>
          <div className="card-content">
            <p>{email()}</p>
            <p>{date()}</p>
          </div>
        </div>
        </div>
    )
}

export default UsersCard