import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const store = configureStore({
    reducer: {},
    devTools: true,
    middleware: [sagaMiddleware]
  });
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);
