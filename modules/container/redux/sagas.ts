import { spawn } from 'redux-saga/effects';
import { authSaga } from 'modules/auth/auth-saga';

export function* rootSaga() {
  yield spawn(authSaga);
}
