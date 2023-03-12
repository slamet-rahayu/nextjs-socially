/* eslint-disable import/no-cycle */
import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ILoginReq, IAuthRes, IRegisterReq } from './interface/auth';
import { loginApi, registerApi } from './auth-api';
import {
  setLoginSuccess,
  setLoginFailed,
  setLoginDone,
  setAuth,
  setRegisterSuccess,
  setRegisterFailed,
  setRegisterDone
} from './auth-action';
import { SET_LOGIN, SET_REGISTER } from './auth-constant';

function* setLogin(action: PayloadAction<ILoginReq>) {
  try {
    const response: IAuthRes = yield call(loginApi, action.payload);
    yield put(setLoginSuccess(response));
    yield put(setAuth(response));
  } catch (error: any) {
    yield put(setLoginFailed(error.response.data));
  } finally {
    yield put(setLoginDone());
  }
}

function* setRegister(action: PayloadAction<IRegisterReq>) {
  try {
    const response: IAuthRes = yield call(registerApi, action.payload);
    yield put(setRegisterSuccess(response));
    yield put(setAuth(response));
  } catch (error: any) {
    yield put(setRegisterFailed(error.response.data));
  } finally {
    yield put(setRegisterDone());
  }
}

export function* authSaga() {
  yield takeLatest(SET_LOGIN, setLogin);
  yield takeLatest(SET_REGISTER, setRegister);
}
