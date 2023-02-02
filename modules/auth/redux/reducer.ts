/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { setLogin } from './action';

export const loginReducer = createReducer(
  {
    isLoading: false,
    isError: false,
    loginRes: {}
  },
  (builder) => {
    builder.addCase(setLogin, (state, action) => {
      state.isLoading = true;
    });
  }
);
