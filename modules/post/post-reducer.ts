/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getPostSuccess, getPostFailed, getPostDone, getPost, getPostClear } from './post-actions';
import { getPostInitialState } from './post-initial-state';

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

const postReducers = {
  getPost: getPostReducer
};

export default postReducers;
