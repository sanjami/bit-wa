import React from 'react';
import BackButton from '../SharedComponents/BackButton';

const AboutAuthor = (props) => {
    return (
        <div className='container'>
            <BackButton/>
            <h2 className='center-align'>Single Author</h2>
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div >
                        <img src="https://www.forever21.com/us/shop/_common/images/profile_simley.png" alt={props.author.username}/>
                    </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4>{props.author.name}</h4>
                                <p>username: <span>{props.author.username}</span><br/>
                                    email: <span>{props.author.email}</span><br/>
                                    phone: <span>{props.author.phone}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="col s12 m7">
                <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4>ADDRESS</h4>
                                <p>street: <span>{props.author.street}</span><br/>
                                    city: <span>{props.author.city}</span><br/>
                                    zipcode: <span>{props.author.zipcode}</span>
                                </p>
                            </div>
                        </div>
                        <div className="card-image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.053510850893!2d-3.9343205839498934!3d55.87908638971227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886e873150f0cb%3A0x30998df66d41622!2zVmljdG9yIFN0LCBQbGFpbnMsIEFpcmRyaWUgTUw2IDdKWCwg0JLQtdC70LjQutCwINCR0YDQuNGC0LDQvdC40ZjQsA!5e0!3m2!1ssr!2srs!4v1521902374523" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    </div>
                </div>

                <div className="col s12 m7">
                <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4>Company</h4>
                                <p>name: <span>{props.author.company}</span><br/>
                                   slogan: <span>{props.author.slogan}</span><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        
        
        
export default AboutAuthor;