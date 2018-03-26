import React from 'react';
import PostListItem from './PostListItem';
import PropTypes from "prop-types"

const PostsList = (props) => {

    const results = props.data;
    let posts = results.map(post => 
        <PostListItem title={post.title} text={post.text} postId={post.postId} key={post.postId} />
    );

    return (
        <div className='container'>
            <h2 className='center-align'>POSTS</h2>
            <ul className="collection with-header">
                {posts}
            </ul>
        </div>
    )
}
PostsList.propTypes = {
    data:PropTypes.array.isRequired
}


export default PostsList;