import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Home from './Home'

const App = () => {

    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
        </Switch>
      </React.Fragment>
    );
  }

export default App;
