/* eslint-disable import/no-cycle */
import { call, put, takeLatest } from 'redux-saga/effects';
import { IGetProfileRes } from './interface/profile-interface';
import { getProfileApi } from './profile-api';
import { getProfileSuccess, getProfileDone, getProfileFailed } from './profile-action';
import { GET_PROFILE } from './profile-constant';

function* getProfile() {
  try {
    const response: IGetProfileRes = yield call(getProfileApi);
    yield put(getProfileSuccess(response));
  } catch (error: any) {
    yield put(getProfileFailed(error.response.data));
  } finally {
    yield put(getProfileDone());
  }
}

export function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfile);
}
