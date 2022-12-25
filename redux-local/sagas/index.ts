import { spawn } from 'redux-saga/effects';
import pCategSaga from './products-category';
import pSaga from './products';
import loginSaga from './login';
import userSaga from './user';

export default function* rootSaga() {
  yield spawn(pCategSaga);
  yield spawn(pSaga);
  yield spawn(loginSaga);
  yield spawn(userSaga);
}
