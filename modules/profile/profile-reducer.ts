/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  getProfile,
  getProfileSuccess,
  getProfileFailed,
  getProfileClear,
  getProfileDone
} from './profile-action';
import { getProfileInitialState } from './profile-initial-state';

const getProfileReducer = createReducer(getProfileInitialState, (builder) => {
  builder
    .addCase(getProfile, (state) => {
      state.isLoading = true;
    })
    .addCase(getProfileSuccess, (state, action: PayloadAction<any>) => {
      state.getProfileRes = action.payload;
    })
    .addCase(getProfileFailed, (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.getProfileFailed = action.payload;
    })
    .addCase(getProfileDone, (state) => {
      state.isLoading = false;
    })
    .addCase(getProfileClear, (state) => {
      state = getProfileInitialState;
    });
});

const profileReducers = {
  getProfile: getProfileReducer
};

export default profileReducers;
