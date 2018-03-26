import React from 'react';
import AuthorsList from './AuthorsList';
import { dataService } from '../../Services/dataService'


class Authors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        dataService.allAuthorsFunction()
        .then((allAuthors) => {
            this.setState ({
                authors: allAuthors
            })
        })
        }

    render() {
        return (
             <AuthorsList authors={this.state.authors}/>
        )
    }
}



export default Authors;