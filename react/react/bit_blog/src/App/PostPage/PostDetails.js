import React from 'react';
import PostContent from './PostContent';
import PostLinks from './PostLinks';


class PostDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <PostContent/>
                <PostLinks/>
            </React.Fragment>
        )
    }
}



export default PostDetails;