import React from 'react';
import AboutAuthor from './AboutAuthor';
import { dataService } from '../../Services/dataService'



class AuthorDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
    dataService.oneAuthorFunction(this.props.match.params.id)
    .then((singleAuthor) => {
        this.setState({
            author: singleAuthor
        })
    })
    }


    render() {
        return (
            <AboutAuthor oneAuthor={this.state.author}/>
        )
    }
}




export default AuthorDetails;