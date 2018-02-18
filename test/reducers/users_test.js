import { expect } from '../test_helper';
import usersReducer from '../../src/reducers/users';
import * as types from '../../src/actions/types'
describe('User Reducer', () => {
  it('should have initial state', () => {
    expect(usersReducer(undefined, 'unsupported').length).to.eql(0);
  });

  it('should fetch a list of users', () => {
    const action = {
      type: types.FETCH_USERS,
      payload: [{user: "1"}, {user: "2"}]
    }
    expect(usersReducer([], action).length).to.eql(2);
    expect(usersReducer([], action)).to.be.instanceof(Array);
  });

});