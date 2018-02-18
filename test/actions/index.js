import { expect } from '../test_helper';
import { FETCH_USERS } from '../../src/actions/types';
import { fetchUsers } from '../../src/actions';

describe('actions', () => {
  describe('fetch users', () => {
    let action;
    beforeEach(() => {
      action = fetchUsers();
    });

    it('correct type', () => {
      expect(action).to.have.property('type');
      expect(action.type).to.equal(FETCH_USERS);
    });

    it('correct payload', () => {
      expect(action).to.have.property('payload');
      expect(action.payload).to.be.instanceOf(Array);
    });
    
  });
});