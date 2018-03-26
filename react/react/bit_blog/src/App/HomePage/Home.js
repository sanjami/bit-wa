import React from 'react';
import PostList from './PostsList'
import { dataService } from '../../Services/dataService';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        dataService.allPostFunction()
            .then((myPosts) => {
                this.setState({
                    posts: myPosts
                })
            })
    }

    render() {
        return (
            <PostList data={this.state.posts} />  
        )
    }
}



export default Home;