import React from 'react';
import PostsListItem from './PostListItem';

const PostsList = (props) => {
    return (
        <div className='container'>
        <h2 className='center-align'>POSTS</h2>
        <ul className="collection with-header">
             {props.posts.map((post) => {
                 return <PostsListItem post={post} key={post.postId}/>
             })}/>
      </ul>
      </div>
    )
}


export default PostsList;