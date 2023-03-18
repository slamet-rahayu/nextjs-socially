import { createAction } from '@reduxjs/toolkit';
import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_CLEAR,
  GET_POST_FAILED,
  GET_POST_DONE,
  SET_POST_PROGRESS,
  CREATE_POST,
  CREATE_POST_CLEAR,
  CREATE_POST_FAILED,
  CREATE_POST_SUCCESS,
  CREATE_POST_DONE
} from './post-constant';
import { IGetPostResObj, ICreatePost } from './interface/post';

export const getPost = createAction(GET_POST);
export const getPostSuccess = createAction<IGetPostResObj | undefined>(GET_POST_SUCCESS);
export const getPostFailed = createAction(GET_POST_FAILED);
export const getPostDone = createAction(GET_POST_DONE);
export const getPostClear = createAction(GET_POST_CLEAR);

export const createPost = createAction<ICreatePost | undefined>(CREATE_POST);
export const createPostSuccess = createAction<string | undefined>(CREATE_POST_SUCCESS);
export const createPostFailed = createAction(CREATE_POST_FAILED);
export const createPostDone = createAction(CREATE_POST_DONE);
export const createPostClear = createAction(CREATE_POST_CLEAR);

export const setPostProgress = createAction<any>(SET_POST_PROGRESS);
