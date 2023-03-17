import { createAction } from '@reduxjs/toolkit';
import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_CLEAR,
  GET_POST_FAILED,
  GET_POST_DONE,
  SET_POST_PROGRESS
} from './post-constant';
import { IGetPostResObj, ICreatePost } from './interface/post';

export const getPost = createAction(GET_POST);
export const getPostSuccess = createAction<IGetPostResObj | undefined>(GET_POST_SUCCESS);
export const getPostFailed = createAction(GET_POST_FAILED);
export const getPostDone = createAction(GET_POST_DONE);
export const getPostClear = createAction(GET_POST_CLEAR);

export const createPost = createAction<ICreatePost | undefined>(GET_POST);
export const createPostSuccess = createAction<string | undefined>(GET_POST_SUCCESS);
export const createPostFailed = createAction(GET_POST_FAILED);
export const createPostDone = createAction(GET_POST_DONE);
export const createPostClear = createAction(GET_POST_CLEAR);

export const setPostProgress = createAction<any>(SET_POST_PROGRESS);
