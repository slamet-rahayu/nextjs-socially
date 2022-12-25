/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice: any = createSlice({
  name: 'login',
  initialState: {
    data: {},
    isLoading: false,
    isError: ''
  },
  reducers: {
    resetState: (state: any) => {
      state.data = {};
      state.isLoading = true;
      state.isError = '';
    },
    postLogin: (state: any, action: any): void => {
      state.data = action.payload;
    },
    failLogin: (state: any, action: any) => {
      state.isError = action.payload;
    },
    donePostLogin: (state) => {
      state.isLoading = false;
    }
  }
});

const isLoggedInSlice: any = createSlice({
  name: 'isloggedin',
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    setIsLoggedIn: (state: any, action: any) => {
      state.isLoggedIn = action.payload;
    }
  }
});

export const { postLogin, failLogin, donePostLogin, resetState } = loginSlice.actions;

export const { setIsLoggedIn } = isLoggedInSlice.actions;

export default {
  loginSlice: loginSlice.reducer,
  isLoggedInSlice: isLoggedInSlice.reducer
};
