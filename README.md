# Testing Concepts
Use testing framework to verify behavior of code. 

### test -| components -| app_test.js

Purpose of this file is to test ONLY the app component. 

- Ask yourself, what is the `behavior` of this component we want to `test`.

For this example, we only care that this component shows a `div`. 

We will right a simple test that asserts that component exists

```
describe

it

expect
```
form the backbone of all testing that will be done. 

### Describe
use describe to group together `similar` tests

``` 
describe('App')
```
- suggest using the `component` you are testing as the `name` of the test `group`.
### it
use `it` to test a single attribute of a target.

- group 1 single test `I'm testing X about Y`

```
it('shows correct text`)
```

### expect
Use `expect` to make an `assertion` about a target. 

We consider the `component` to be the `target` of the expect. 

**Assertion:** reasonable belief that some fact about the target is true. 

- expect is a keyword for mocha however most other frameworks use a similar methods. 
- most packages have a describe, an it, and an expect. 

-------

## Configuring A Test
Mocha Tests

```
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('shows the correct text', () => {
    expect();
  });
});
```

- Mocha safely executes our tests by wrapping them in `functions`.  Its so that mocha can execute without worrying about crashing due to errors being throw.  this results in a `failing` test case. 

### Anatomy of an Expect Statement

``` 
expect(component).to.have.class('comment-box');
```

`expect(component)`
- the thing we want to make an assertion about

`.to.have.class`
- assertion matcher - how to compare the two given values

`('comment-box')`
- the value we expect

`npm run test -- --watch` allows tests to continously run everytime you save

Completed and passing test
```
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('shows React Simple Starter', () => {
    // create instance of app
    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');

  });
});
```

----

# Building A feature with spec

Feature:
Ability to add a comment and display all the comments

 #### Always Ask
 What do I want to test to ensure that stuff isn't breaking

 For our features in the comment box

 1. it has a text area
 2. it has a button
 3. entering text into the text area updates the text

 for the component list

 1. it shows a comment in an LI (list item)
 2. given a list of comments, it shows all the comments

**its a good idea to make assumptions about the specific end product**
- the test should allow flexibility
- shouldn't care about individual methods

**Note** `Live watching of tests wont work if you create a new file.  mocha will not detect the new file`
 
----
# Purpose of Chai and Mocha

Taking a look at `test_helper.js`

```
import chai, { expect } from 'chai';
```

What is `chai`?

Requirements of testing...
* Something to run the tests
* Something to write tests

Chai specifically handles **write tests**

Mocha handles the **running tests**

## test_heper.js File

File was doing the following...

1. Setup testing environment to run like a browser in the command line
2. Build 'renderComponent' helper that should render a given react class
3. Build helper for simulating events
4. Setup chai-jquery 

### Step 1
**global.document** responsible for replacing the `window.document`.  Allows for creating a fake browser

```
global.document = jsdom.jsdom(<!doctype html><html><body></body></html>)
global.window = global.document.defaultView;
```

```
import _$ from 'jquery';
```
partial jquery, the _$ allows us to configure our own window and set it to jquery so that jquery doesn't try and instantiate itself.

> the fact that we used **_$** isn't important, its an arbitrary value. You could have used anything for this value. 

This essentially overrides the basic / default behavior of jQuery module. 

### Step 2 - the juicy part
Building a `renderComponent` helper

> react document clearly states that renderIntoDocument testing utility requires **requires a dom**. `jsdom` library satisfies this requirement for us. 

```
// build rendercomponent
function renderComponent(ComponentClass) {
  // renders this into our created DOM
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);
  
}
```

the `const componentInstance` does not give us access to the HTML. 

`ReactDom` handles the access to the underlying html. 

> `ReactDOM.findDOMNode(componentInstance)` is responsible for creating the HTML

At this point some of the tests are passing but there are some errors.  Specifically we are adding props / passing props to a component render however in our current utils suite we don't support this. 


To support this we need to setup this. 
```
function renderComponent(ComponentClass, props, state) {
  // renders this into our created DOM
  // renders this into a fragment
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider
      store={createStore(reducers, state)}
    >
      <ComponentClass {...props} />
    </Provider>
  );
  // grab the html
  ReactDOM.findDOMNode(componentInstance);

  // wrap it inside jquery. 
  return $(ReactDOM.findDOMNode(componentInstance));

}
```

## Step 3
Simulate some react events

```
// simulate some react events
$.fn.simulate = function(eventName, value) {
  
}

// To call simulate $('div').simulate
```

We want to somehow get the element and access it. 

Under React docs in `add-ons` we search / look for test utilities.  In particular we want **Simulate**

> This is probably the single most important thing on the test utils. 

We implement the test utils simulation function...
```
// simulate some react events
$.fn.simulate = function(eventName, value) {
  // we use JS magic and pass in eventName such as 'click'.
  TestUtils.Simulate[eventName](this[0]); 
}
```

### Step 4
Finally we setup some chai jquery stuff

```
chaiJquery(chai, chai.util, $);
```