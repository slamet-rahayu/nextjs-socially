/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userInfoSlice: any = createSlice({
  name: 'userinfo',
  initialState: {
    data: {},
    isLoading: true,
    isError: ''
  },
  reducers: {
    getUserInfo: (state: any, action: any): void => {
      state.data = action.payload;
    },
    failGetUserInfo: (state: any, action: any) => {
      state.isError = action.payload;
    },
    doneGetUserInfo: (state) => {
      state.isLoading = false;
    }
  }
});

export const { getUserInfo, failGetUserInfo, doneGetUserInfo } = userInfoSlice.actions;

export default {
  userInfoSlice: userInfoSlice.reducer
};
