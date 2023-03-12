import { createAction } from '@reduxjs/toolkit';
import {
  SET_LOGIN,
  SET_LOGIN_FAILED,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_CLEAR,
  SET_LOGIN_DONE,
  SET_AUTH,
  SET_CLEAR_AUTH,
  SET_REGISTER,
  SET_REGISTER_FAILED,
  SET_REGISTER_SUCCESS,
  SET_REGISTER_CLEAR,
  SET_REGISTER_DONE
} from './auth-constant';
import { ILoginReq, IAuthRes, IRegisterReq } from './interface/auth';

export const setLogin = createAction<ILoginReq | undefined>(SET_LOGIN);
export const setLoginSuccess = createAction<IAuthRes | undefined>(SET_LOGIN_SUCCESS);
export const setLoginFailed = createAction(SET_LOGIN_FAILED);
export const setLoginClear = createAction(SET_LOGIN_CLEAR);
export const setLoginDone = createAction(SET_LOGIN_DONE);

export const setRegister = createAction<IRegisterReq | undefined>(SET_REGISTER);
export const setRegisterSuccess = createAction<IAuthRes | undefined>(SET_REGISTER_SUCCESS);
export const setRegisterFailed = createAction(SET_REGISTER_FAILED);
export const setRegisterClear = createAction(SET_REGISTER_CLEAR);
export const setRegisterDone = createAction(SET_REGISTER_DONE);

export const setAuth = createAction<IAuthRes | undefined>(SET_AUTH);
export const setClearAuth = createAction(SET_CLEAR_AUTH);
