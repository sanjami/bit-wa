import React from 'react';
import { dataService } from '../../Services/dataService';
import { Redirect } from "react-router-dom";
import ErrorComponent from '../SharedComponents/ErrorComponent'

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      contentValue: '',
      redirectHome: false,
      errorMessage: '',
      titleValidation: false,
      contentValidation: false,
      formValidation: false
    };
  }

  handleChangeTitle = (event) => {
   if (event.target.value.length > 20) {
      this.setState({ errorMessage: 'Title is too long', titleValidation: false });
      this.validateForm(); 
    } else {
      this.setState({ titleValue: event.target.value, errorMessage: '', titleValidation: true });
      this.validateForm();
    }
  }

  handleChangeContent = (event) => {
     if (event.target.value.length > 10) {
      this.setState({ errorMessage: 'Content is too long', contentValidation: false });
      this.validateForm(); 
    } else {
      this.setState({ contentValue: event.target.value, errorMessage: '', contentValidation: true });
      this.validateForm(); 
    }
  }

  validateForm() {
    this.setState({formValidation: this.state.titleValidation && this.state.contentValidation});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.formValidation === true) {
      dataService.newPostFunction({
        userId: 1,
        title: this.state.titleValue,
        body: this.state.contentValue,
      })
        .then((result) => {
          this.setState({
            redirectHome: true
          })
        })
    }
  }

  handleClick = () => {
    this.setState({
      redirectHome: true
    })
  }


  render() {
    const { from } = '/posts/new'
    const { redirectHome } = this.state
    return (

      <div className="container">
        <h3 className='center-align'>New Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input required type="text" className='input-title' value={this.state.titleValue} onChange={this.handleChangeTitle} />
          </label>

          <label>
            Content
          <textarea value={this.state.contentValue} onChange={this.handleChangeContent} required>
            </textarea>
          </label>
          <ErrorComponent message={this.state.errorMessage} />
          <input type="submit" value="Save" className='save-btn' disabled={this.state.formValidation?false:'disabled'} />
          <input type="button" value="Cancel" onClick={this.handleClick} className='click-btn' />
        </form>
        {redirectHome && (
          <Redirect to={from || '/'} />
        )}
      </div>
    );
  }
}


export default NewPost;