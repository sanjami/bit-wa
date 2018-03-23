import React from 'react';
import { Link } from "react-router-dom";

const PostLinks = () => {
    return (
        <div className='container'>
        <ul className="collection with-header">
        <li className="collection-header"><h4>3 more posts from same author</h4></li>
        <a href="#posts:1" className="collection-item">Title 10- velit, vulputate</a>
        <a href="#posts:2" className="collection-item">Title 11- tortor mauris m</a>
        <a href="#posts:3" className="collection-item">Title 12- enean velit</a>
      </ul>
      </div>
            
    )
}


export default PostLinks;