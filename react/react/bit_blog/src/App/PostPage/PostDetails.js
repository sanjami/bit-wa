import React from 'react';
import PostContent from './PostContent';
import PostLinks from './PostLinks';
import { onePostService, oneAuthorService, authorsPostsService } from '../../Services/dataService';


class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            postsForAuthor: [],
            authorName: []
        }
    }

    getData = () => {
        onePostService.onePostFunction(this.props.match.params.id)
        .then((myPost) => {
            this.setState({
                post: myPost
            });
            return oneAuthorService.oneAuthorFunction(myPost.authorId)
        })
        .then((myAuthor) => {
            this.setState({
                authorName: myAuthor.name
            })
            return authorsPostsService.postForAuthorFunction(myAuthor.authorId)
        })     
        .then((authorsPosts) => {
            this.setState({
                postsForAuthor: authorsPosts
            })
        })
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.match.params.id !== this.props.match.params.id) {
            window.location.reload();
        }

    }


    render() {
        return (
            <React.Fragment>
                <PostContent post={this.state.post} authorName={this.state.authorName}/>              
                <PostLinks authorsPosts={this.state.postsForAuthor}/>
            </React.Fragment>
        )
    }
}


export default PostDetails;