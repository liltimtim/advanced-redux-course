import { expect } from '../test_helper';
import * as types from '../../src/actions/types';
import AuthenticationReducer from '../../src/reducers/authentication';

describe('Authentication', () => {
  it('handle unsupported case', () => {
    expect(AuthenticationReducer(undefined, '')).to.equal(false);
  });

  it('CHANGE_AUTH Authenticated', () => {
    const action = {
      type: types.CHANGE_AUTH,
      payload: true
    }
    expect(AuthenticationReducer(undefined, action)).to.equal(true);
  });

  it('CHANGE_AUTH unauthenticated', () => {
    const action = {
      type: types.CHANGE_AUTH,
      payload: false
    }
    expect(AuthenticationReducer(undefined, action)).to.equal(false);
  });

});