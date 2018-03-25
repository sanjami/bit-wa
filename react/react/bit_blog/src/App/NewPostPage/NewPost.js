import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { newPostService } from '../../Services/dataService';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            contentValue: '',
            fireRedirect: false
        };
    }

    handleTitleChange = (event) => {
        this.setState({titleValue: event.target.value});
      }

      handleContentChange = (event) => {
        this.setState({contentValue: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        newPostService.addPostFunction({
          title: this.state.titleValue,
          body: this.state.contentValue
        })
        .then((result) => this.setState({ fireRedirect: true }))
      }

      handleCancel = (event) => {
        this.setState({ fireRedirect: true })
      }
    
      render() {
        const { from } = '/posts/new'
        const { fireRedirect } = this.state
        return (
          <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input id="titleInput" type="text" value={this.state.titleValue} onChange={this.handleTitleChange} />
            </label>
            <label>
                Content:
                <textarea value={this.state.contentValue} onChange={this.handleContentChange} />
            </label>
            <input type="submit" value="Save" />
            <input type="button" value="Cancel"  onClick={this.handleCancel}/>
          </form>
          {fireRedirect && (
            <Redirect to={from || '/'}/>
          )}
          </div>
        );
      }
    }
export default NewPost;