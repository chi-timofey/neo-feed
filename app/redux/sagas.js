import { fork } from 'redux-saga/effects';
import neoFeedSaga from 'containers/NeoFeed/sagas';

export default function* rootSaga() {
  return yield [
    fork(neoFeedSaga),
  ];
}
