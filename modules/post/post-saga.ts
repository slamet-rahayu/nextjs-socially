/* eslint-disable import/no-cycle */
import { call, put, takeLatest, take, fork, ChannelTakeEffect } from 'redux-saga/effects';
import { END, eventChannel } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { ICreatePost, IGetPostResObj, IGetPostParam } from './interface/post';
import { getPostApi, createPostApi } from './post-api';
import {
  getPostSuccess,
  getPostDone,
  getPostFailed,
  createPostSuccess,
  createPostFailed,
  createPostDone,
  setPostProgress
} from './post-actions';
import { GET_POST, CREATE_POST } from './post-constant';

function* getPost(action: PayloadAction<IGetPostParam>) {
  try {
    const response: IGetPostResObj = yield call(getPostApi, action.payload);
    yield put(getPostSuccess(response));
  } catch (error: any) {
    yield put(getPostFailed(error.response.data));
  } finally {
    yield put(getPostDone());
  }
}

let emit: any;
const chan = eventChannel((emitter) => {
  emit = emitter;
  return () => {};
});

function* watchOnProgress(chans: any) {
  while (true) {
    const data: ChannelTakeEffect<any> = yield take(chans);
    yield put(setPostProgress(data));
  }
}

function* createPost(action: PayloadAction<ICreatePost>) {
  try {
    const { payload } = action;
    const formData = new FormData();
    formData.append('file', payload.file);
    formData.append('caption', payload.caption);
    yield fork(watchOnProgress, chan);
    const response: string = yield call(createPostApi, formData, (progressEvent: any) => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      emit(percentCompleted);
      if (percentCompleted === 100) {
        emit(END);
      } else {
        emit(percentCompleted);
      }
    });
    yield put(createPostSuccess(response));
  } catch (error: any) {
    yield put(createPostFailed(error.response.data));
  } finally {
    yield put(createPostDone());
  }
}

export function* postSaga() {
  yield takeLatest(GET_POST, getPost);
  yield takeLatest(CREATE_POST, createPost);
}
