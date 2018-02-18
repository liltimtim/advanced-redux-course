// is a container component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers(users) {
    let items = new Array();
    users.forEach(user => {
      items.push(this.renderUser(user));
    });
    return items;
  }

  renderUser(user) {
    const { name } = user;
    return (
      <div className="user-list-card">
        <div key={name} className="card card-block">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Cheese Factory</p>
          <a className="btn btn-primary">Email</a>
        </div>
      </div>
    );
  }
  
  render() {
    const { users } = this.props;
    return (
      <div className="user-list">
        { users.map(this.renderUser) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return { users };
} 

export default connect(mapStateToProps, actions)(UserList);