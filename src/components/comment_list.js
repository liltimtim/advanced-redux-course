import React, { Component } from 'react';
import { connect } from 'react-redux';
class CommentList extends Component {
  _renderList(comments) {
    return comments.map(item => <li key={item}>{item}</li>);
  }
  render() {
    const { comments } = this.props;
    return(
      <ul 
        className='comment-list'
      >
        {this._renderList(comments)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);