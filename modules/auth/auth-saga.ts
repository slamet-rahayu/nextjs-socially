import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ILoginReq, ILoginRes } from './interface/login';
import { loginApi } from './auth-api';
import { setLoginSuccess, setLoginFailed, setLoginDone } from './auth-action';
import { SET_LOGIN } from './auth-constant';

function* setLogin(action: PayloadAction<ILoginReq>) {
  try {
    const response: ILoginRes = yield call(loginApi, action.payload);
    yield put(setLoginSuccess(response));
  } catch (error: any) {
    yield put(setLoginFailed(error.response.data));
  } finally {
    yield put(setLoginDone());
  }
}

export function* authSaga() {
  yield takeLatest(SET_LOGIN, setLogin);
}
