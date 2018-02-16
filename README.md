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
 
