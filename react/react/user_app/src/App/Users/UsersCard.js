import React from 'react';
import { email, date } from '../../Shared/utils'


const UsersCard =(props) => {
   
    const female = () => {
        if(props.user.gender === 'female') {
            return (     
            <div className="card red lighten-5">
              <div className="card-image">
                <img src={props.user.picture} alt={props.user.firstName}/>
                <span className="card-title">{props.user.firstName}</span>
              </div>
              <div className="card-content">
                <p>{email(props.user.email)}</p>
                <p>{date(props.user.dateOfBirth)}</p>
              </div>
            </div>
            )
        }
        return (
                
            <div className="card blue lighten-5">
              <div className="card-image">
                <img src={props.user.picture} alt={props.user.firstName}/>
                <span className="card-title">{props.user.firstName}</span>
              </div>
              <div className="card-content">
                <p>{email(props.user.email)}</p>
                <p>{date(props.user.dateOfBirth)}</p>
              </div>
            </div>
        );
    }

    return (
        <div className="col s4 m4"> 
        {female()}
        </div>
    )
}

export default UsersCard