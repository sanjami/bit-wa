import React from 'react';
import { Link } from "react-router-dom";

const PostListItem = (props) => {
    return (
        <React.Fragment>
        <li className="collection-header"><Link to={`posts${props.post.postId}`}><h4>{props.post.title}</h4></Link></li>
        <li className="collection-item">{props.post.text}</li>
        </React.Fragment>
    )
}


export default PostListItem;