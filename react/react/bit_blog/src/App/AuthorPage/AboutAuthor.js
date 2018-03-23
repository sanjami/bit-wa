import React from 'react';
import BackButton from '../SharedComponents/BackButton';

const AboutAuthor = () => {
    return (
        <div className='container'>
            <BackButton/>
            <h2 className='center-align'>Single Author</h2>
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div >
                        <img src="https://lorempixel.com/100/190/nature/6"/>
                    </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4>NAME SURNAME</h4>
                                <p>username: <span>my_cool_username</span><br/>
                                    email: <span>my_cool@email.com</span><br/>
                                    phone: <span>1-770-736-8031</span>
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
                                <p>street: <span>Bla Bla St</span><br/>
                                    city: <span>Gwenborough</span><br/>
                                    zipcode: <span>77068</span>
                                </p>
                            </div>
                        </div>
                        <div className="card-image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.6847016596566!2d-1.0963088838283208!3d52.62954167983503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877615c3a596609%3A0x63211eb0cf96745e!2zR3dlbmRvbGVuIFJkLCBMZWljZXN0ZXIgTEU1LCDQktC10LvQuNC60LAg0JHRgNC40YLQsNC90LjRmNCw!5e0!3m2!1ssr!2srs!4v1521806579390" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    </div>
                </div>

                <div className="col s12 m7">
                <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4>Company</h4>
                                <p>name: <span>Gwenborough</span><br/>
                                   slogan: <span>77068</span><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        
        
        
export default AboutAuthor;