import React from 'react';
import BackButton from '../SharedComponents/BackButton';
import PropTypes from "prop-types"

const AboutAuthor = (props) => {
  //  console.log(props.oneAuthor.name)
    return (
        <div className='container back-btn'>
            <BackButton/>
            <h2 className='center-align'>Single oneAuthor</h2>
            <div className="col s12 m7">
                <div className="card horizontal row">
                    <div className='col s5'>
                        <img src="http://files.softicons.com/download/internet-icons/user-icons-by-2shi/png/256/user1.png" alt={props.oneAuthor.username}/>
                    </div>
                        <div className="card-stacked col s5 offset-s2">
                            <div className="card-content">
                                <h4>{props.oneAuthor.name}</h4>
                                <p>username: <span>{props.oneAuthor.username}</span><br/>
                                    email: <span>{props.oneAuthor.email}</span><br/>
                                    phone: <span>{props.oneAuthor.phone}</span>
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
                                <p>street: <span>{props.oneAuthor.street}</span><br/>
                                    city: <span>{props.oneAuthor.city}</span><br/>
                                    zipcode: <span>{props.oneAuthor.zipcode}</span>
                                </p>
                            </div>
                        </div>
                        <div className="card-image">
                        <iframe title='title' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.6847016596566!2d-1.0963088838283208!3d52.62954167983503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877615c3a596609%3A0x63211eb0cf96745e!2zR3dlbmRvbGVuIFJkLCBMZWljZXN0ZXIgTEU1LCDQktC10LvQuNC60LAg0JHRgNC40YLQsNC90LjRmNCw!5e0!3m2!1ssr!2srs!4v1521806579390" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    </div>
                </div>

                <div className="col s12 m7">
                <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4>Company</h4>
                                <p>name: <span>{props.oneAuthor.company}</span><br/>
                                   slogan: <span>{props.oneAuthor.slogan}</span><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }

AboutAuthor.propTypes = {
    author: PropTypes.object.isRequired
}
        
        
        
export default AboutAuthor;