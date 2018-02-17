import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';
describe('Comment Reducer', () => {

  // essentially testing the initial state
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action).length).to.equal(1);
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});