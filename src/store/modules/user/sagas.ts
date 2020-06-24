import {call, put, takeLatest, all} from 'redux-saga/effects';

import {Action} from 'redux';

import axios from '../../../services/axios';

import {fetchGitUserSuccess, fetchGitUserFailure} from './actions';
import {UserTypes, UserRequestInput} from './types';

interface T extends Action {
  payload: UserRequestInput;
}

function* fetchUser({payload}: T) {
  if (!payload.userName) {
    yield put(fetchGitUserFailure());
  }

  try {
    const response = yield call(axios.get, `/users/${payload.userName}`);

    yield put(fetchGitUserSuccess(response.data));
  } catch (err) {
    yield put(fetchGitUserFailure());
  }
}

export default all([takeLatest(UserTypes.FETCH_GIT_USER_REQUEST, fetchUser)]);
