import moment from 'moment';
import { delay } from 'redux-saga';
import { fork, put, call } from 'redux-saga/effects';
import { getAsteroidsList } from 'api';
import { SHOW_NEXT, LIMIT_OF_DATA_FETCH_DAYS, SHOW_NEXT_DELAY, DATE_FORMAT } from './constants';
import { asteroidsListAction } from './actions';

export function* loadAsteroidsListSaga() {
  const dayOfMonth = moment().date();
  let startDate = moment().startOf('month').format(DATE_FORMAT);
  const steps = Math.floor(dayOfMonth / LIMIT_OF_DATA_FETCH_DAYS);
  try {
    for (let i = 0; i <= steps; i += 1) {
      let endDate = moment(startDate).add(LIMIT_OF_DATA_FETCH_DAYS, 'days').format(DATE_FORMAT);
      if (i === steps) {
        endDate = moment().format(DATE_FORMAT);
      }
      const data = yield call(getAsteroidsList, startDate, startDate = endDate);
      yield put(asteroidsListAction.get.success(data.near_earth_objects));
    }
  } catch (err) {
    yield put(asteroidsListAction.get.fail(err));
  }
}

export function* showNextNearEarthObjSaga() {
  while (true) {
    yield delay(SHOW_NEXT_DELAY);
    yield put({ type: SHOW_NEXT });
  }
}

export default function* asteroidsListSaga() {
  yield* [
    fork(loadAsteroidsListSaga),
    fork(showNextNearEarthObjSaga),
  ];
}
