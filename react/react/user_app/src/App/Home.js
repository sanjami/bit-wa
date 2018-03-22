import React, { Component } from 'react';
import Header from './Partials/Header'
import UsersGrid from './Users/UsersGrid'
import { usersService } from '../Services/UsersService';
import UsersList from './Users/UsersList'
import LoadingElement from './Partials/LoadingElement';
import SearchBar from './Partials/SearchBar'

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        filterUsers: [],
        showGrid: false,
        loading: true
      }
    }
  
  
    componentDidMount() {
  
      if (localStorage.getItem('saveUsers')) {
        let savedString = localStorage.getItem('saveUsers');
        let savedUsers = JSON.parse(savedString);
  
        let savedModeString = localStorage.getItem('saveViewMode');
        let savedMode = JSON.parse(savedModeString)
  
        this.setState({
          users: savedUsers,
          filterUsers: savedUsers,
          showGrid: savedMode
        })
      } 
         usersService.UserFunction()
          .then((myUsers) => {
            this.setState({
              users: myUsers,
              filterUsers: myUsers,
              loading: false
            })
  
            localStorage.removeItem('saveUsers');
            localStorage.setItem('saveUsers', JSON.stringify(myUsers));
          })
      }
    
  
    handleRefresh = (event) => {
      event.preventDefault();
      usersService.UserFunction()
        .then((myUsers) => {
          this.setState({
            users: myUsers,
            filterUsers: myUsers     
          })
        })
    }
  
    handleClick = (event) => {
      event.preventDefault();
      localStorage.removeItem('saveViewMode');
      localStorage.setItem('saveViewMode', JSON.stringify(!this.state.showGrid))
  
      this.setState((prevState, props) => {
        return { showGrid: !prevState.showGrid }
      })
    }
  
    handleChange = (event) => {
      let inputValue = event.target.value;
      let newUsers = this.state.users.filter((user) => `${user.firstName} ${user.surname}`.toLowerCase().includes(inputValue.toLowerCase()))
      this.setState({
        filterUsers: newUsers
      })
    }
  
  
    showGrid = () => {
      return <UsersGrid users={this.state.filterUsers} />
    }
  
    showList = () => {
      return <UsersList users={this.state.filterUsers} />
    }
  
    content = () => {
      return (
        <React.Fragment>
        <SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue}/>
        <div className="container">
        {this.state.showGrid ? this.showGrid() : this.showList()}
      </div>
      </React.Fragment>
      )
    }
  
    loadingSign = () => {
      return (
        <LoadingElement/>
      )
    }
  
    render() {
      return (
        <React.Fragment>
         <Header handleClick={this.handleClick} handleRefresh={this.handleRefresh} iconToShow={this.state.showGrid} currentPage={this.props.match.path} />
          {this.state.loading ? this.loadingSign() : this.content()}
        </React.Fragment>
      );
    }
  }
  
  export default Home;
  