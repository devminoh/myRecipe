// import { all, fork, call, takeLatest, put, delay } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   LOG_IN_SUCCESS,
//   LOG_OUT_SUCCESS,
//   SIGN_UP_SUCCESS,
//   FOLLOW_SUCCESS,
//   UNFOLLOW_SUCCESS,
//   LOG_IN_FAILURE,
//   LOG_OUT_FAILURE,
//   SIGN_UP_FAILURE,
//   FOLLOW_FAILURE,
//   UNFOLLOW_FAILURE,
//   LOG_IN_REQUEST,
//   LOG_OUT_REQUEST,
//   SIGN_UP_REQUEST,
//   FOLLOW_REQUEST,
//   UNFOLLOW_REQUEST,
// } from '../reducers/user';

// // login
// function logInAPI(data: any) {
//   return axios.post('/api/login', data);
// }

// function* logIn(action: { data: any; }) {
//   try {
//     // const result = yield call(logInAPI, action.data);
//     yield delay(1000);
//     yield put({
//       type: LOG_IN_SUCCESS,
//       data: action.data,
//       // data: result.data,
//     });
//   } catch (err:any) {
//     yield put({
//       type: LOG_IN_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// //logout
// function logOutAPI(data: any) {
//   return axios.post('/api/logout', data);
// }

// function* logOut() {
//   try {
//     // const result = yield call(logOutAPI);
//     yield delay(1000);
//     yield put({
//       type: LOG_OUT_SUCCESS,
//       // data: result.data,
//     });
//   } catch (err:any) {
//     yield put({
//       type: LOG_OUT_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// // signUp
// function signUpAPI(data:any) {
//   return axios.post('/api/signUp', data);
// }

// function* signUp() {
//   try {
//     // const result = yield call(signUpAPI);
//     yield delay(1000);
//     yield put({
//       type: SIGN_UP_SUCCESS,
//       // data: result.data,
//     });
//   } catch (err:any) {
//     yield put({
//       type: SIGN_UP_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// // follow
// // function followAPI(data:any) {
// //   return axios.post('/api/follow', data);
// // }

// // function* follow(action:any) {
// //   try {
// //     // const result = yield call(followAPI);
// //     yield delay(1000);
// //     yield put({
// //       type: FOLLOW_SUCCESS,
// //       data: action.data,
// //     });
// //   } catch (err:any) {
// //     yield put({
// //       type: FOLLOW_FAILURE,
// //       error: err.response.data,
// //     });
// //   }
// // }

// // unfollow
// // function unfollowAPI(data:any) {
// //   return axios.post('/api/unfollow', data);
// // }

// // function* unfollow(action:any) {
// //   try {
// //     // const result = yield call(unfollowAPI);
// //     yield delay(1000);
// //     yield put({
// //       type: UNFOLLOW_SUCCESS,
// //       data: action.data,
// //     });
// //   } catch (err:any) {
// //     yield put({
// //       type: UNFOLLOW_FAILURE,
// //       error: err.response.data,
// //     });
// //   }
// // }

// // function* watchFollow() {
// //   yield takeLatest(FOLLOW_REQUEST, follow);
// // }
// // function* watchUnfollow() {
// //   yield takeLatest(UNFOLLOW_REQUEST, unfollow);
// // }

// function* watchLogIn() {
//   yield takeLatest(LOG_IN_REQUEST, logIn);
// }

// function* watchLogOut() {
//   yield takeLatest(LOG_OUT_REQUEST, logOut);
// }

// function* watchSignUp() {
//   yield takeLatest(SIGN_UP_REQUEST, signUp);
// }

// export default function* userSaga() {
//   yield all([
//     // fork(watchFollow),
//     // fork(watchUnfollow),
//     fork(watchLogIn),
//     fork(watchLogOut),
//     fork(watchSignUp),
//   ]);
// }
