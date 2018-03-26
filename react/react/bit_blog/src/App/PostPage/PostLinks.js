import React from 'react';
import PropTypes from "prop-types"

const PostLinks = (props) => {
    return (
        <div className='container'>
            <ul className="collection with-header">
                <li className="collection-header"><h4>3 more posts from same author</h4></li>
                {props.allPosts.slice(0,3).map((post) => {
                    return (<a href={`#posts${post.postId}`} className="collection-item" key={post.postId}>{post.title} </a>)
                })}
            </ul>
        </div>

    )
}
PostLinks.propTypes = {
    allPosts: PropTypes.array.isRequired
 }


export default PostLinks;