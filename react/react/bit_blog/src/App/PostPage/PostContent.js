import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"


const PostContent = (props) => {
    return (
        <div className="container center-align">
            <h2>{props.onePost.title}</h2>
            <Link to={`/Author${props.author.authorId}`}>{props.author.name}</Link>
            <p>{props.onePost.text}</p>
         </div>  
    )
}
PostContent.propTypes = {
    onePost: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired
 }
 



export default PostContent;