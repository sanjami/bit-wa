import React from 'react';

const SentimentSign = () => {
    return (
        <div className = 'sentiment container grey-text darken-1 center-align'>
            <div className='row'>
                <div className='col s4 offset-s4'>
                    <i className=" large material-icons">sentiment_neutral</i>
                    <h4>We couldn't find any <br/> people matching your <br/> search</h4>
                </div>
            </div>
        </div>
    )
} 

export default SentimentSign;