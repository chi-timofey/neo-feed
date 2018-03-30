import { fromJS, List } from 'immutable';
import reducer from '../reducers';
import { SHOW_NEXT } from '../constants';

const initialState = fromJS({
  list: [],
  startIdx: 0,
});

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SHOW_NEXT when list.length > 6', () => {
    const state = initialState.set('list', List([1, 2, 3, 4, 5, 6, 7]));
    expect(reducer(state, { type: SHOW_NEXT })).toEqual(state.set('startIdx', 1));
  });
});
