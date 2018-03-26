import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const AuthorsList = (props) => {
    return (
        <div className='container'>
            <h4 className='center-align'>AUTHORS ({props.authors.length})</h4>
            <div className="collection">
                {props.authors.map((author) => {
                    return(<Link to={`/author${author.authorId}`} className="collection-item" key={author.authorId}><h4>{author.name}</h4></Link>)
                })}
                
            </div>
        </div>
    )
}

AuthorsList.propTypes = {
    authors: PropTypes.array.isRequired
}



export default AuthorsList;