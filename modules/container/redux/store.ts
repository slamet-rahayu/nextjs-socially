/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import { Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import authReducer from 'modules/auth/auth-reducer';
import profileReducers from 'modules/profile/profile-reducer';
import postReducers from 'modules/post/post-reducer';
import { rootSaga } from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  ...authReducer,
  ...profileReducers,
  ...postReducers
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      nextReduxCookieMiddleware({
        subtrees: ['auth']
      }),
      sagaMiddleware
    )
});

export const makeStore = wrapMakeStore(() => {
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
});

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);
