# Higher Order Components

Component + Higher Order Component = {Component w/ additions} [Enhanced Components]

We have actually used Higher Order Components or **HOC** for short before...

> When using **redux** and `connect`, we are actually using a HOC. 

```
export default connect(mapStateToProps)(App);
```

By invoking this code, App turns from a Component into a `container`

## Authentication HOC Overview

Goal: Create an HOC that authenticates the user


-----

# Making an HOC

```
// this is the HOC
import React, { Component } from 'react';

// component you want to wrap
export default function(ComposedComponent) {

  // note like a normal react component...

  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return Authentication;
}
```

We use the HOC in other files for other components... to do this...
> code below will not compile just an sudo example
```
import Authentication // HOC component
import Resources // component to wrap

const ComposedComponent = Authentication(Resources);

....
// in some render method

<ComposedComponent />
```

**Remember:** Higher order component that is a function that is called with an existing component. 

> any props passed in will be `forwarded` to the composed component

## Component Context
Similar to `props` however extends the entire render tree. 

### Step 1: need to get access to the context for the router
```
this.context;
```
> abuse could be common, react forces you to define context types on each react class component, you can only access properties on the context IFF you have declared a need to access them. 

You can define a `needs access` by asking for **contextTypes**
```
static contextTypes = {
  router: React.PropTypes.object
}
```

> this prevents context abuse

Inside `require_authentication.js`
```
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
```

console logging out the contextTypes will not show the router object. 

Using the `static` keyword states that this is a class level property. It can be accessed via the class and not an instance of the class.  

> Similar too 'static properties' in a traditional proramming language. 
