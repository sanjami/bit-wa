import React from 'react';
import PostContent from './PostContent';
import PostLinks from './PostLinks';
import { onePostService, authorsPosts } from '../../Services/dataService';


class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            postsForAuthor: []
        }
    }

    componentDidMount() {
        onePostService.onePostFunction(this.props.match.params.id)
        .then((myPost) => {
            this.setState({
                post: myPost
            });
            return authorsPosts.postForAuthorFunction(myPost.authorId)
        })      
        .then((authorsPosts) => {
            this.setState({
                postsForAuthor: authorsPosts
            })
        });
    }


    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <PostContent post={this.state.post}/>              
                <PostLinks authorsPosts={this.state.postsForAuthor}/>
            </React.Fragment>
        )
    }
}



export default PostDetails;