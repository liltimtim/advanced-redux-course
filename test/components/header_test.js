import { expect, renderComponent } from '../test_helper';
import header from '../../src/components/header';

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(header);
  });

  it('should have 3 buttons', () => {
    expect(component.find('li')).to.have.class('nav-item');
    expect(component.find('ul').children()).to.have.lengthOf(3);
  });

  describe('sign in and out', () => {
    
    it('should sign in', () => {
      component.find('button').simulate('click');
      expect(component.find('button')).to.contain('Sign Out');
    });

    it('sign out', () => {
      let btn = component.find('button');
      btn.simulate('click'); // sign in
      expect(btn).to.contain('Sign Out');
      btn.simulate('click');
      expect(btn).to.contain('Sign In');
    });
  });

  

});