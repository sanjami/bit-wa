import React, { Component } from 'react';
import Footer from './Partials/Footer'
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Home from './Home'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
