import { createRequestActions } from 'utils/createRequestActions';
import * as types from './constants';

export const asteroidsListAction = {
  get: createRequestActions({
    request: types.ASTEROIDS_LIST.GET.REQUEST,
    success: types.ASTEROIDS_LIST.GET.SUCCESS,
    fail: types.ASTEROIDS_LIST.GET.FAIL,
  }),
};
