import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has an input field', () => {
    expect(component.find('textarea')).to.exist;
  });
  
  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('has class CommentBox', () => {
    expect(component).to.have.class('comment-box');
  });

  // very close relation, nest another describe
  // called child specs
  describe('entering text', () => {
    beforeEach(() => {
      // simulate will trigger an event to simulate.  
      // simulate a 'change event'
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text that is entered', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
  
    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
