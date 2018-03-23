import React from 'react';
import PostList from './PostsList'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <PostList/>  
        )
    }
}



export default Home;