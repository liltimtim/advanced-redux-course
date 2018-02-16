import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ comment: value });
  } 

  handleSubmit(event) {
    // prevent form from submitting to server first
    event.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form 
      onSubmit={this.handleSubmit.bind(this)}
      className='comment-box'>
        <textarea 
        value={this.state.comment}
        onChange={this.handleChange.bind(this)}/>
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

export default CommentBox;