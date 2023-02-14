import { createAction } from '@reduxjs/toolkit';
import {
  SET_LOGIN,
  SET_LOGIN_FAILED,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_CLEAR,
  SET_LOGIN_DONE
} from './auth-constant';
import { ILoginReq, ILoginRes } from './interface/login';

export const setLogin = createAction<ILoginReq | undefined>(SET_LOGIN);
export const setLoginSuccess = createAction<ILoginRes | undefined>(SET_LOGIN_SUCCESS);
export const setLoginFailed = createAction(SET_LOGIN_FAILED);
export const setLoginClear = createAction(SET_LOGIN_CLEAR);
export const setLoginDone = createAction(SET_LOGIN_DONE);
