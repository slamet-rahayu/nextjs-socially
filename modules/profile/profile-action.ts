import { createAction } from '@reduxjs/toolkit';
import {
  GET_PROFILE,
  GET_PROFILE_CLEAR,
  GET_PROFILE_FAILED,
  GET_PROFILE_DONE,
  GET_PROFILE_SUCCESS
} from './profile-constant';
import { IGetProfileRes } from './interface/profile-interface';

export const getProfile = createAction(GET_PROFILE);
export const getProfileSuccess = createAction<IGetProfileRes | undefined>(GET_PROFILE_SUCCESS);
export const getProfileFailed = createAction(GET_PROFILE_FAILED);
export const getProfileClear = createAction(GET_PROFILE_CLEAR);
export const getProfileDone = createAction(GET_PROFILE_DONE);
