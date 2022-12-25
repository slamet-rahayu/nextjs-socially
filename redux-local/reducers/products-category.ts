/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const pCategSlice: any = createSlice({
  name: 'productscategory',
  initialState: {
    data: [],
    isLoading: true,
    isError: false
  },
  reducers: {
    getPCateg: (state: any, action: any): void => {
      state.data = action.payload;
    },
    failGetPCateg: (state) => {
      state.isError = true;
    },
    doneGetPcateg: (state) => {
      state.isLoading = false;
    }
  }
});

export const { getPCateg, failGetPCateg, doneGetPcateg } = pCategSlice.actions;

export default pCategSlice.reducer;
