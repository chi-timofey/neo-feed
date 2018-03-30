import combineEvents from 'utils/combineEvents';
import { fromJS } from 'immutable';
import { transformData } from 'utils/helpers';
import { ASTEROIDS_LIST, SHOW_NEXT } from './constants';

const initialState = {
  list: [],
  startIdx: 0,
};

export default combineEvents({
  [ASTEROIDS_LIST.GET.SUCCESS]: (state, { payload }) =>
    state.updateIn(['list'], l => l.concat(transformData(payload.data))),
  [SHOW_NEXT]: s =>
    s.set('startIdx', s.get('startIdx') < s.get('list').size ? s.get('startIdx') + 1 : 0),
}, fromJS(initialState));
