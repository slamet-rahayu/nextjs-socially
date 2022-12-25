import { call, put, takeEvery } from 'redux-saga/effects';
import { IUserRes } from 'interface/user';
import { PayloadAction } from '@reduxjs/toolkit';
import userApi from 'apis/user';
import Actions from '../actions/user';
import { getUserInfo, doneGetUserInfo, failGetUserInfo } from '../reducers/user';

function* userInfoFetch(action: PayloadAction<string>) {
  try {
    const { payload } = action;
    const data: IUserRes = yield call(() => userApi.getUserInfo(payload));
    yield put(getUserInfo(data));
  } catch (error: any) {
    yield put(failGetUserInfo(error.response.data.error.message));
  } finally {
    yield put(doneGetUserInfo());
  }
}

export default function* userInfoSaga() {
  yield takeEvery(Actions.GET_USERINFO_REQUESTED, userInfoFetch);
}
