/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  setLogin,
  setLoginSuccess,
  setLoginClear,
  setLoginFailed,
  setLoginDone,
  setRegister,
  setRegisterSuccess,
  setRegisterClear,
  setRegisterFailed,
  setRegisterDone,
  setAuth,
  setClearAuth
} from './auth-action';
import { authInitialState, loginInitialState, registerInitialState } from './auth-initial-state';

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
      state.isLoading = false;
    })
    .addCase(setLoginClear, (state) => {
      state = loginInitialState;
    });
});

const registerReducer = createReducer(registerInitialState, (builder) => {
  builder
    .addCase(setRegister, (state) => {
      state.isLoading = true;
    })
    .addCase(setRegisterSuccess, (state, action: PayloadAction<any>) => {
      state.registerRes = action.payload;
    })
    .addCase(setRegisterFailed, (state, action: PayloadAction<any>) => {
      state.isError = true;
      state.registerFailed = action.payload;
    })
    .addCase(setRegisterDone, (state) => {
      state.isLoading = false;
    })
    .addCase(setRegisterClear, (state) => {
      state = registerInitialState;
    });
});

const authReducer = createReducer(authInitialState, (builder) => {
  builder
    .addCase(setAuth, (state, action: any) => {
      state.userData = action.payload;
    })
    .addCase(setClearAuth, (state) => {
      state.userData = authInitialState.userData;
    })
    .addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.auth
      };
    });
});

const authReducers = {
  loginReducer,
  registerReducer,
  authReducer
};

export default authReducers;
