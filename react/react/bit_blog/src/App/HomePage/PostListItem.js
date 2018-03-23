import React from 'react';
import { Link } from "react-router-dom";

const PostListItem = () => {
    return (
        <React.Fragment>
        <li className="collection-header"><Link to='posts:1'><h4>Title 1</h4></Link></li>
        <li className="collection-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
        <li className="collection-header"><Link to='posts:2'><h4>Title 2</h4></Link></li>
        <li className="collection-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
        <li className="collection-header"><Link to='posts:3'><h4>Title 3</h4></Link></li>
        <li className="collection-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
        <li className="collection-header"><Link to='posts:4'><h4>Title 4</h4></Link></li>
        <li className="collection-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
        </React.Fragment>
    )
}


export default PostListItem;