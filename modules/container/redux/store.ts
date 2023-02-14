import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import authReducer from 'modules/auth/auth-reducer';
import rootSaga from 'redux-local/sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  login: authReducer.loginReducer
};

const makeStore = () => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [sagaMiddleware]
  });
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);
