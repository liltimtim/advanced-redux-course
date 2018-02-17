import jsdom from 'jsdom'; // helps simulate fake html document / browser like env.
import _$ from 'jquery'; // reference to jquery, kinda junky version though
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';
// setup testing env run browser command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); // initializes the fake browser
global.window = global.document.defaultView;
const $ = _$(global.window);

// build rendercomponent
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

// simulate some react events
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }
  // we use JS magic and pass in eventName such as 'click'.
  TestUtils.Simulate[eventName](this[0]);
}

// To call simulate $('div').simulate

// setup chai jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
