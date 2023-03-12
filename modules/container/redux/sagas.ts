/* eslint-disable import/no-cycle */
import { spawn } from 'redux-saga/effects';
import { authSaga } from 'modules/auth/auth-saga';
import { profileSaga } from 'modules/profile/profile-saga';

export function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(profileSaga);
}
