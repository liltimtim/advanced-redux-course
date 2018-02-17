// this is the HOC
import React, { Component } from 'react';
import { connect } from 'react-redux';

// component you want to wrap
export default function(ComposedComponent) {
  // note like a normal react component...
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    // gets called when the component is about to be handed new props
    componentWillUpdate(nextProps) {
      const { authenticated } = nextProps;
      this._handleAuth(authenticated);
    }

    componentWillMount() {
      const { authenticated } = this.props;
      this._handleAuth(authenticated);
    }

    _handleAuth(authenticated) {
      const { router } = this.context;
      if(!authenticated) {
        router.push('/');
      }
    }

    render() {
      // if user isn't authenticated, kick them out
      console.log(this.context);
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    const { authenticated } = state;
    return { authenticated }
  }
  return connect(mapStateToProps)(Authentication);
}