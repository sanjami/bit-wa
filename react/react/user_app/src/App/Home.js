import React, { Component } from 'react';
import Header from './Partials/Header'
import UsersGrid from './Users/UsersGrid'
import { usersService } from '../Services/UsersService';
import UsersList from './Users/UsersList'
import LoadingElement from './Elements/LoadingElement';
import SearchBar from './Elements/SearchBar'
import SentimentSign from './Elements/SentimentSign'
import Footer from './Partials/Footer'
import { timeSinceRefresh } from '../Shared/utils'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			filterUsers: [],
			showGrid: false,
			loading: true,
			startTime: new Date(),
			time: 0
		}
	}


	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
		if (localStorage.getItem('saveUsers')) {
			let savedString = localStorage.getItem('saveUsers');
			let savedUsers = JSON.parse(savedString);

			let savedModeString = localStorage.getItem('saveViewMode');
			let savedMode = JSON.parse(savedModeString)

			this.setState({
				users: savedUsers,
				filterUsers: savedUsers,
				showGrid: savedMode,
				loading: false
			})
		} else {
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
	}

	tick() {
		this.setState(
			{ time: new Date() }
		)
	}

	handleRefresh = (event) => {
		event.preventDefault();
		usersService.UserFunction()
			.then((myUsers) => {
				this.setState({
					users: myUsers,
					filterUsers: myUsers,
					time: 0,
					startTime: new Date()
				})
				localStorage.removeItem('saveUsers');
				localStorage.setItem('saveUsers', JSON.stringify(myUsers));
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
		if (this.state.filterUsers.length === 0) {
			return (
				<React.Fragment>
					<SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue} />
					<div className="right-align gender">{this.checkGender()}</div>
					<SentimentSign />
				</React.Fragment>
			)
		}
		return (
			<React.Fragment>
				<SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue} />
				<div className="right-align gender">{this.checkGender()}</div>
				<div className="container">
					{this.state.showGrid ? this.showGrid() : this.showList()}
				</div>
			</React.Fragment>
		)
	}

	loadingSign = () => {
		return (
			<LoadingElement />
		)
	}

	checkGender = () => {
		let maleUsers = this.state.filterUsers.filter((user) => user.gender === 'male')
		let femaleUsers = this.state.filterUsers.filter((user) => user.gender === 'female')
		return `Male: ${maleUsers.length} Female: ${femaleUsers.length}`
	}

	render() {
		return (
			<React.Fragment>
				<Header handleClick={this.handleClick} handleRefresh={this.handleRefresh} iconToShow={this.state.showGrid} currentPage={this.props.match.path} />
				{this.state.loading ? this.loadingSign() : this.content()}
				<Footer timer={timeSinceRefresh(Date.parse(this.state.startTime), Date.parse(this.state.time))} />
			</React.Fragment>
		);
	}
}

export default Home;
