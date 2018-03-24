import React from 'react';
import { Link } from "react-router-dom";


const PostContent = (props) => {
    return (
        <div className="container center-align">
            <h2>{props.post.title}</h2>
            <Link to={`/Author${props.post.authorId}`}>{props.post.authorId}</Link>
            <p>{props.post.text}</p>
         </div>  
    )
}


export default PostContent;