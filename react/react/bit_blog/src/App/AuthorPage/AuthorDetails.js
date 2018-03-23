import React from 'react';
import AboutAuthor from './AboutAuthor';
import BackButton from '../SharedComponents/BackButton';


class AuthorDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AboutAuthor/>
        )
    }
}



export default AuthorDetails;