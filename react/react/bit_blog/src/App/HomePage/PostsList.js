import React from 'react';
import PostsListItem from './PostListItem';

const PostsList = () => {
    return (
        <div className='container'>
        <h2 className='center-align'>POSTS</h2>
        <ul className="collection with-header">
           <PostsListItem/>
      </ul>
      </div>
    )
}


export default PostsList;