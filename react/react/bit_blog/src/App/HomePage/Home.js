import React from 'react';
import PostList from './PostsList';
import { allPostService } from '../../Services/dataService';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
componentDidMount() {
    allPostService.allPostFunction()
    .then((myPosts) => {
        this.setState({
            posts: myPosts
        })
    })
}

    render() {
        return (
            <PostList posts={this.state.posts}/>  
        )
    }
}



export default Home;