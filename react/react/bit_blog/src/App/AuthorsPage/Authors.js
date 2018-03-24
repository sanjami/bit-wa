import React from 'react';
import AuthorsList from './AuthorsList';
import { allAuthorsService } from '../../Services/dataService';


class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        allAuthorsService.allAuthorsFunction()
        .then((myAuthors) => {
            this.setState({
                authors: myAuthors
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