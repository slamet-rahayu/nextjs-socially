/* eslint-disable import/no-cycle */
import { call, put, takeLatest } from 'redux-saga/effects';
import { IGetPostResObj } from './interface/post';
import { getPostApi } from './post-api';
import { getPostSuccess, getPostDone, getPostFailed } from './post-actions';
import { GET_POST } from './post-constant';

function* getPost() {
  try {
    const response: IGetPostResObj = yield call(getPostApi);
    yield put(getPostSuccess(response));
  } catch (error: any) {
    yield put(getPostFailed(error.response.data));
  } finally {
    yield put(getPostDone());
  }
}

export function* postSaga() {
  yield takeLatest(GET_POST, getPost);
}
