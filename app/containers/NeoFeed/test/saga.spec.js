import { put } from 'redux-saga/effects';
import { showNextNearEarthObjSaga } from '../sagas';
import { SHOW_NEXT } from '../constants';

describe('Test Saga', () => {
  describe('showNextNearEarthObjSaga', () => {
    it('should call showNextNearEarthObjSaga serially', () => {
      const generator = showNextNearEarthObjSaga();
      let next = generator.next();
      next = generator.next();
      expect(next.value).toEqual(put({ type: SHOW_NEXT }));
      next = generator.next();
      next = generator.next();
      expect(next.value).toEqual(put({ type: SHOW_NEXT }));
    });
  });
});
