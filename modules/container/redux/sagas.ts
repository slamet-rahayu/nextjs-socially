/* eslint-disable import/no-cycle */
import { spawn } from 'redux-saga/effects';
import { authSaga } from 'modules/auth/auth-saga';
import { profileSaga } from 'modules/profile/profile-saga';
import { postSaga } from 'modules/post/post-saga';
import { startStopChannel } from 'modules/home/home-saga';

export function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(profileSaga);
  yield spawn(postSaga);
  yield spawn(startStopChannel);
}
