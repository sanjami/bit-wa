import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './HomePage/Home'
import PostDetails from './PostPage/PostDetails'
import Authors from './AuthorsPage/Authors'
import AuthorDetails from './AuthorPage/AuthorDetails'
import About from './AboutPage/About'
import Header from './Partials/Header'
import Footer from  './Partials/Footer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <div className='main'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts:id' component={PostDetails} />
        <Route path='/authors' component={Authors} />
        <Route path='/author:id' component={AuthorDetails} />
        <Route path='/about' component={About} />
      </Switch>
      </div>
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
