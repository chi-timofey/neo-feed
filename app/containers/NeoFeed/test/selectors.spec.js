import data from 'mock/data.json';
import { fromJS } from 'immutable';
import { getListToShow, getHighlightedListId } from '../selectors';

const state = {
  neo: fromJS({
    list: data,
    startIdx: 0,
  }),
};

describe('test neo feed selectors', () => {
  it('Prepare list to show correctly', () => {
    const listToShow = getListToShow(state, 6);
    expect(listToShow.length).toEqual(6);
  });

  it('find two with max magnitude', () => {
    const highlightedListId = getHighlightedListId(state);
    expect(highlightedListId.length).toEqual(2);
  });
});
