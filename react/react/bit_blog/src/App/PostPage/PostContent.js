import React from 'react';
import { Link } from "react-router-dom";
import BackButton from '../SharedComponents/BackButton';

const PostContent = (props) => {
    return (
        <div className="container center-align">
        <BackButton/>
            <h2>{props.post.title}</h2>
            <Link to={`/author${props.post.authorId}`}>{props.authorName}</Link>
            <p>{props.post.text}</p>
         </div>  
    )
}


export default PostContent;