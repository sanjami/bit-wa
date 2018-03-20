import React, { Component } from 'react';
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

  render() {
    return (
      <React.Fragment>
        <Header handleClick={this.handleClick} iconToShow={this.state.showGrid}/>
          <div className ="container">
          {this.state.showGrid ? this.showGrid() : this.showList() }
            <Footer />
          </div>
      </React.Fragment>
    );
  }
}

export default App;
