import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import axios, { AxiosRequestConfig } from 'axios';
import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  generateDummyPost,
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import shortId from 'shortid';

// loadPost
function loadPostsAPI(data: any) {
  return axios.get("/api/posts", data);
}

function* loadPosts(action: any) {
  console.log(action);
  try{
    // const result = yield call(loadPostsAPI, action.data)
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch(err: any) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    })
  }
}

// addpost
function addPostAPI(data:any) {
  return axios.post("/api/post", data);
}

function* addPost(action:any) {
  try{
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    })
  } catch(err:any) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

// removePost
function removePostAPI(data: AxiosRequestConfig<any> | undefined) {
  return axios.delete("/api/post", data);
}

function* removePost(action: any) {
  try{
    // const result = yield call(removePostAPI, action.data)
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    })
  } catch(err:any) {
    // console.error(err)
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    })
  }
}


function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost), 
    fork(watchLoadPosts), 
    fork(watchRemovePost),
  ]);
}