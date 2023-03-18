/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getPostSuccess,
  getPostFailed,
  getPostDone,
  getPost,
  getPostClear,
  setPostProgress,
  createPost,
  createPostFailed,
  createPostSuccess,
  createPostDone,
  createPostClear
} from './post-actions';
import { getPostInitialState, createPostInitialState } from './post-initial-state';

const getPostReducer = createReducer(getPostInitialState, (builder) => {
  builder
    .addCase(getPost, (state) => {
      state.isLoading = true;
    })
    .addCase(getPostSuccess, (state, action: PayloadAction<any>) => {
      state.getPostRes = action.payload;
    })
    .addCase(getPostFailed, (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.getPostFailed = action.payload;
    })
    .addCase(getPostDone, (state) => {
      state.isLoading = false;
    })
    .addCase(getPostClear, (state) => {
      state = getPostInitialState;
    });
});

const createPostReducer = createReducer(createPostInitialState, (builder) => {
  builder
    .addCase(createPost, (state) => {
      state.isLoading = true;
    })
    .addCase(createPostSuccess, (state, action: PayloadAction<any>) => {
      state.createPostRes = action.payload;
    })
    .addCase(createPostFailed, (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.createPostFailed = action.payload;
    })
    .addCase(createPostDone, (state) => {
      state.isLoading = false;
    })
    .addCase(createPostClear, (state) => {
      state = createPostInitialState;
    })
    .addCase(setPostProgress, (state, action: PayloadAction<any>) => {
      state.progress = action.payload;
    });
});

const postReducers = {
  getPost: getPostReducer,
  createPost: createPostReducer
};

export default postReducers;
