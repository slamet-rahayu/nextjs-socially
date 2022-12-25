import { call, put, takeEvery } from 'redux-saga/effects';
import { ILoginRes, IloginParam } from 'interface/login';
import loginApi from 'apis/login';
import { PayloadAction } from '@reduxjs/toolkit';
import { postLogin, failLogin, donePostLogin, resetState, setIsLoggedIn } from '../reducers/login';
import Actions from '../actions/login';

function* loginPost(action: PayloadAction<IloginParam>) {
  try {
    const { payload } = action;
    yield put(resetState());
    const data: ILoginRes = yield call(() => loginApi.loginApi(payload));
    yield put(postLogin(data));
  } catch (error: any) {
    yield put(failLogin(error.response.data.error.message));
  } finally {
    yield put(donePostLogin());
  }
}

function* setLoggedIn(action: PayloadAction<boolean>) {
  const { payload } = action;
  yield put(setIsLoggedIn(payload));
}

export default function* loginSaga() {
  yield takeEvery(Actions.POST_LOGIN_REQUESTED, loginPost);
  yield takeEvery(Actions.SET_IS_LOGGEDIN, setLoggedIn);
}
