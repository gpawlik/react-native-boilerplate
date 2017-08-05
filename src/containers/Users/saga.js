import { call, put, take } from 'redux-saga/effects';

import { fetchUsers } from './service';
import { actionTypes as at } from './constants';
import { fetchSuccess, fetchError } from './actions';

export const fetchUsersList = function* fetchUsersList(id: string) {
  try {
    const result = yield call(fetchUsers, id);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
};

export const sampleWatcher = function* sampleWatcher() {
  while (true) {
    const { id } = yield take(at.USERS_SAMPLE_FETCH);

    yield call(fetchUsersList, id);
  }
};
