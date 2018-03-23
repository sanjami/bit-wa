import React from 'react';
import AuthorsList from './AuthorsList';


class Authors extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
             <AuthorsList/>
        )
    }
}



export default Authors;