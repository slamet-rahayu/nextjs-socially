/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  setLogin,
  setLoginSuccess,
  setLoginClear,
  setLoginFailed,
  setLoginDone
} from './auth-action';
import { loginInitialState } from './auth-initial-state';

const loginReducer = createReducer(loginInitialState, (builder) => {
  builder
    .addCase(setLogin, (state) => {
      state.isLoading = true;
    })
    .addCase(setLoginSuccess, (state, action: PayloadAction<any>) => {
      state.loginRes = action.payload;
    })
    .addCase(setLoginFailed, (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.loginFailed = action.payload;
    })
    .addCase(setLoginDone, (state) => {
      state = { ...state, isLoading: false };
    })
    .addCase(setLoginClear, (state) => {
      state = loginInitialState;
    });
});

const authReducer = {
  loginReducer
};

export default authReducer;
