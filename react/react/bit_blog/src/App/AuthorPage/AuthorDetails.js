import React from 'react';
import AboutAuthor from './AboutAuthor';
import BackButton from '../SharedComponents/BackButton';
import { oneAuthorService } from '../../Services/dataService';


class AuthorDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        oneAuthorService.oneAuthorFunction(this.props.match.params.id)
        .then((myAuthor) => {
            this.setState({
                author: myAuthor
            }) 
        })
    }

    render() {
        return (
            <AboutAuthor author={this.state.author}/>
        )
    }
}



export default AuthorDetails;