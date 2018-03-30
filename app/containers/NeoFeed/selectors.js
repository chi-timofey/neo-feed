import { createSelector } from 'reselect';
import { LIMIT_TO_SHOW } from './constants';

const getData = ({ neo }) => neo.get('list').toJS();
const getStartIdx = ({ neo }) => neo.get('startIdx');

export const getListToShow = createSelector(
  [getData, getStartIdx],
  (list, startIdx) => list.length ? [...Array(LIMIT_TO_SHOW)].map((el, i) => {
    let idx = startIdx + i;
    if (idx >= list.length) {
      idx -= list.length;
    }
    return list[idx];
  }) : [],
);

const sortByMagnitude = (a, b) => a.absolute_magnitude_h > b.absolute_magnitude_h ? 1 : -1;
export const getHighlightedListId = createSelector(
  [getListToShow],
  list => [...list].sort(sortByMagnitude).slice(-2).map(item => item.neo_reference_id),
);
