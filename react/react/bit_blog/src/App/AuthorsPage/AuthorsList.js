import React from 'react';
import { Link } from "react-router-dom";

const AuthorsList = () => {
    return (
        <div className='container'>
            <h4 className='center-align'>AUTHORS (5)</h4>
            <div className="collection">
                <Link to='/author:1' className="collection-item"><h4>Name Surname</h4></Link>
                <Link to='/author:2' className="collection-item"><h4>Name Surname</h4></Link>
                <Link to='/author:3' className="collection-item"><h4>Name Surname</h4></Link>
                <Link to='/author:4' className="collection-item"><h4>Name Surname</h4></Link>
            </div>
        </div>
    )
}



export default AuthorsList;