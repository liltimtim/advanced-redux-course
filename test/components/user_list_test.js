import { renderComponent, expect } from '../test_helper';
import UserList from '../../src/components/user_list';

describe('User List', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(UserList);
  });

  it('should have user list element', () => {
    expect(component).to.have.class('user-list');
  });

});