import React, { Component } from 'react';
<<<<<<< HEAD
import Footer from './Partials/Footer'
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Home from './Home'

class App extends Component {
=======
import Header from './Partials/Header'
import Footer from './Partials/Footer'
import UsersGrid from './Users/UsersGrid'
import { usersService } from '../Services/UsersService';
import UsersList from './Users/UsersList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    }    
  }


  componentDidMount(){
    usersService.UserFunction()
    .then((myUsers) => {
      this.setState({
        users: myUsers,
        showGrid: false
      })
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return { showGrid: !prevState.showGrid }
   })  
  }

  showGrid = () => {
    return <UsersGrid users={this.state.users}/>
  }

  showList = () => {
    return <UsersList users={this.state.users}/>
  }
>>>>>>> 909225afd69677b1dc1cc52da14f53851854ffe7

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About}/>
        </Switch>
        <Footer />
=======
        <Header handleClick={this.handleClick} iconToShow={this.state.showGrid}/>
          <div className ="container">
          {this.state.showGrid ? this.showGrid() : this.showList() }
            <Footer />
          </div>
>>>>>>> 909225afd69677b1dc1cc52da14f53851854ffe7
      </React.Fragment>
    );
  }
}

export default App;
