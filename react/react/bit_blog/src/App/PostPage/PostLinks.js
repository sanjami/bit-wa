import React from 'react';
import { Link } from "react-router-dom";

const PostLinks = (props) => {

    return (
        <div className='container'>
        <ul className="collection with-header">
        <li className="collection-header"><h4>3 more posts from same author</h4></li>
        {props.authorsPosts.slice(0, 3).map((post) => {
            return <Link to={`/posts${post.id}`} className="collection-item" key={post.id}>{post.title}</Link>
        })}
      </ul>
      </div>
            
    )
}


export default PostLinks;