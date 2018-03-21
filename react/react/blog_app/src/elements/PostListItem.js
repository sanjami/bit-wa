import React from 'react';
import PropTypes from 'prop-types'



const PostListItem = (props) => {
    return (
        <li>
            <h3 className="card-panel #bdbdbd grey lighten-1">{props.title}</h3>
            <p className="card-panel #e0e0e0 grey lighten-2">{props.body}</p>
        </li>
    )
}

PostListItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default PostListItem;