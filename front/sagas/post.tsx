import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import axios from 'axios';
import {
  // LOAD_POSTS_SUCCESS,
  // LOAD_POSTS_FAILURE,
  // LOAD_POSTS_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  // REMOVE_POST_SUCCESS,
  // REMOVE_POST_FAILURE,
  // REMOVE_POST_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  // generateDummyPost,
} from "../reducers/post";
// import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import shortId from 'shortid';

// loadPost
// function loadPostsAPI(data) {
//   return axios.get("/api/posts", data);
// }

// function* loadPosts(action) {
//   console.log(action);
//   try{
//     // const result = yield call(loadPostsAPI, action.data)
//     yield delay(1000);
//     const id = shortId.generate();
//     yield put({
//       type: LOAD_POSTS_SUCCESS,
//       data: generateDummyPost(10),
//     });
//   } catch(err) {
//     yield put({
//       type: LOAD_POSTS_FAILURE,
//       error: err.response.data,
//     })
//   }
// }

// addpost
function addPostAPI(data:any) {
  return axios.post("/api/post", data);
}

function* addPost(action:any) {
  console.log(action);
  try{
    // const result = yield call(addPostAPI, action.data)
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      }
    });
    // yield put({
    //   type: ADD_POST_TO_ME,
    //   data: id,
    // })
  } catch(err:any) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

// removePost
// function removePostAPI(data) {
//   return axios.delete("/api/post", data);
// }

// function* removePost(action) {
//   try{
//     // const result = yield call(removePostAPI, action.data)
//     yield delay(1000);
//     yield put({
//       type: REMOVE_POST_SUCCESS,
//       data: action.data,
//     });
//     yield put({
//       type: REMOVE_POST_OF_ME,
//       data: action.data,
//     })
//   } catch(err) {
//     // console.error(err)
//     yield put({
//       type: REMOVE_POST_FAILURE,
//       data: err.response.data,
//     })
//   }
// }

//addComment
function addCommentAPI(data:any) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action:any) {
  try{
    // const result = yield call(addCommentAPI, action.data)
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch(err:any) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

// function* watchLoadPosts() {
//   yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
// }

// function* watchRemovePost() {
//   yield takeLatest(REMOVE_POST_REQUEST, removePost);
// }

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost), 
    // fork(watchLoadPosts), 
    // fork(watchRemovePost), 
    fork(watchAddComment)
  ]);
}