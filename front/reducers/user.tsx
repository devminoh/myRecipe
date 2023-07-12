// import { produce } from "immer";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, // 닉변 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

// export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
// export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data: any) => ({
  ...data,
  nickname: "zerocho",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "라라라라" },
    { nickname: "해와달" },
    { nickname: "루루루" },
  ],
  Followers: [
    { nickname: "라라라라" },
    { nickname: "해와달" },
    { nickname: "루루루" },
  ],
});

//action creator
export const loginRequestAction = (data: any) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

// const reducer = (state = initialState, action: { type: any; data: any; error: null; }) => {
//   return produce(state, (draft) => {
//     console.log(draft.me)
//     switch (action.type) {
//       case FOLLOW_REQUEST:
//         draft.followLoading = true;
//         draft.followError = null;
//         draft.followDone = false;
//         break;
//       case FOLLOW_SUCCESS:
//         draft.followLoading = false;
//         draft.followDone = true;
//         draft.me.Followings.push({id: action.data});
//         break;
//       case FOLLOW_FAILURE:
//         draft.followLoading = false;
//         draft.followError = action.error;
//         break;
//       case UNFOLLOW_REQUEST:
//         draft.unfollowLoading = true;
//         draft.unfollowError = null;
//         draft.unfollowDone = false;
//         break;
//       case UNFOLLOW_SUCCESS:
//         draft.unfollowLoading = false;
//         draft.unfollowDone = true;
//         draft.me.Followings = draft.me.Followings.filter((V)=> v.id !== action.data);
//         break;
//       case UNFOLLOW_FAILURE:
//         draft.unfollowLoading = false;
//         draft.unfollowError = action.error;
//         break;
//       case LOG_IN_REQUEST:
//         draft.logInLoading = true;
//         draft.logInError = null;
//         draft.logInDone = false;
//         break;
//       case LOG_IN_SUCCESS:
//         draft.logInLoading = false;
//         draft.logInDone = true;
//         draft.me = dummyUser(action.data);
//         break;
//       case LOG_IN_FAILURE:
//         draft.logInLoading = false;
//         draft.logInError = action.error;
//         break;
//       case LOG_OUT_REQUEST:
//         draft.logOutLoading = true;
//         draft.logOutDone = false;
//         draft.logOutError = null;
//         break;
//       case LOG_OUT_SUCCESS:
//         draft.logOutLoading = false;
//         draft.logOutDone = true;
//         draft.me = null;
//         break;
//       case LOG_OUT_FAILURE:
//         draft.logOutLoading = false;
//         draft.logOutError = action.error;
//         break;
//       case SIGN_UP_REQUEST:
//         draft.signUpLoading = true;
//         draft.signUpDone = false;
//         draft.signUpError = null;
//         break;
//       case SIGN_UP_SUCCESS:
//         draft.signUpLoading = false;
//         draft.signUpDone = true; 
//         break;
//       case SIGN_UP_FAILURE:
//         draft.signUpLoading = false;
//         draft.signUpError = action.error;
//         break;
//       case CHANGE_NICKNAME_REQUEST:
//         draft.changeNicknameLoading = true;
//         draft.changeNicknameDone = false;
//         draft.changeNicknameError = null;
//         break;
//       case CHANGE_NICKNAME_SUCCESS:
//         draft.changeNicknameLoading = false;
//         draft.changeNicknameDone = true;
//         break;
//       case CHANGE_NICKNAME_FAILURE:
//         draft.changeNicknameLoading = false;
//         draft.changeNicknameError = action.error;
//         break;
//       // case ADD_POST_TO_ME:
//       //   draft.me.Posts.unshift({ id: action.data });
//       //   break;
//       // case REMOVE_POST_OF_ME:
//       //   draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
//       //   break;
//         // return {
//         //   ...state,
//         //   me: {
//         //     ...state.me,
//         //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
//         //   },
//         // };
//       default:
//         break;
//         // return state;
//     }
//   });
// };
// export default reducer;

const reducer = (state=initialState, action: { type: any; data: any; error: any; }) => {
  switch(action.type){
    case LOG_IN_REQUEST:
      return {
        ...state, 
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state, 
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE:
      return {
        ...state, 
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state, 
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state, 
        logOutLoading: false,
        logOutDone: true,
        me: null,
      }
    case LOG_OUT_FAILURE:
      return {
        ...state, 
        logOutLoading: false,
        logOutError: action.error,
      }
    case SIGN_UP_REQUEST:
      return {
        ...state, 
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state, 
        signUpLoading: false,
        signUpDone: true,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state, 
        signUpLoading: false,
        signUpError: action.error,
      }
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state, 
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      }
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state, 
        changeNicknameLoading: false,
        changeNicknameDone: true,
      }
    case CHANGE_NICKNAME_FAILURE:
      return {
        ...state, 
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      }
    default:
      return state;
  }
};

export default reducer;

