import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {createRootReducer} from './store/createRootReducer';
import {rootSaga} from './store/rootSaga';

export const initStore = () => {
  const reducer = createRootReducer();
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware] as const;

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(middleware),
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = initStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
