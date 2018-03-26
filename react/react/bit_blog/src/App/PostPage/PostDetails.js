import React from 'react';
import PostContent from './PostContent';
import PostLinks from './PostLinks';
import { dataService } from '../../Services/dataService';


class PostDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onePost: {},
            author: {},
            posts: []
        }
    }

    getData = (postId) => {
        dataService.onePostFunction(postId)
            .then((myPost) => {
                this.setState({
                    onePost: myPost
                })
                dataService.oneAuthorFunction(myPost.authorId)
                    .then((oneAuthor) => {
                        this.setState({
                            author: oneAuthor
                        })
                        dataService.authorPostsFunction(oneAuthor.authorId)
                            .then((authorPost) => {
                                this.setState({
                                    posts: authorPost
                                })
                            })
                    })
            })
    }

    componentDidMount() {
        var postId = this.props.match.params.id;
        this.getData(postId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            var postId = nextProps.match.params.id
            this.getData(postId);
        }
    }

    filterPost = () => {
        let newArrayPost = this.state.posts.filter((post) => this.props.match.params.id !== post.postId )
        return newArrayPost;
    }


    render() {
        return (
            <React.Fragment>
                <PostContent onePost={this.state.onePost} author={this.state.author} />
                <PostLinks allPosts={this.filterPost()} />
            </React.Fragment>
        )
    }
}



export default PostDetails;