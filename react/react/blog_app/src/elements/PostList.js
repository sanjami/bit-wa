import React from 'react';
import PostListItem from './PostListItem.js';
import PropTypes from "prop-types"


const PostList = (props) => {
    return (
        <ul className="center-align">
            {props.posts.map((post) => <PostListItem title={post.title} body={post.body} key={post.id}/> )}
        </ul>
    )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}
export default PostList;