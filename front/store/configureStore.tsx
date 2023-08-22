import { createWrapper } from 'next-redux-wrapper'; 
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

interface Proptypes {
  dispatch: any;
  getState: any;
}

const loggerMiddleware = ({ dispatch, getState }: Proptypes) => (next: (arg0: any) => any) => (action: any) => {
  console.log(action)
  return next(action);
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) //배포용일땐 데브툴즈 사용안함
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.dispatch({
    type: "LOG_IN",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;