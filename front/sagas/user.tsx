import { all, fork, call, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_FAILURE,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SIGN_UP_REQUEST,
} from '../reducers/user';

export interface actionType {
  data: any;
  type: string;
}

// login
function logInAPI(data: any) {
  return axios.post('/api/login', data);
}

function* logIn(action: actionType) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
      // data: result.data,
    });
  } catch (err:any) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

//logout
function logOutAPI(data: any) {
  return axios.post('/api/logout', data);
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (err:any) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

// signUp
function signUpAPI(data:any) {
  return axios.post('/api/signUp', data);
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
    });
  } catch (err:any) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
