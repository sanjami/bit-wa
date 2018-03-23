import React from 'react';
import { Link } from "react-router-dom";

const PostContent = () => {
    return (
        <div className="container center-align">
            <h2>Post title 1</h2>
            <Link to='/Author:1'>Author name</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat iaculis facilisis. Donec in leo justo. Fusce mi augue, porta vitae viverra at, efficitur sed purus. Sed mollis commodo pulvinar. Nunc fermentum orci efficitur, dapibus neque non, gravida dolor. Cras convallis dolor ante, a varius lacus fermentum lobortis. Curabitur bibendum massa a mauris consequat, vitae porta nulla consequat.</p>
         </div>  
    )
}


export default PostContent;