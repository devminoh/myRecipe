import shortId from 'shortid';
import { produce } from 'immer';
import { faker } from "@faker-js/faker";
faker.seed(123);

export const initialState = {
  mainPosts: [],
  imagePaths: '',
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
}

export const generateDummyPost = (number: number) => Array(number).fill().map(()=> ({
  id: shortId.generate(),
  User: {
    id: shortId.generate(),
    nickname: faker.internet.userName(),
  },
  serve: 2,
  category: '양식',
  Ingredients: [{
      name: faker.lorem.paragraph(),
    },{
      name: faker.lorem.paragraph(),
    }],
    image: faker.image.url(),
    Recipes: [{
      recipe: faker.lorem.sentence()
    },{
      recipe: faker.lorem.sentence()
    },{
      recipe: faker.lorem.sentence()
    }],
    link: faker.lorem.sentence()
}));

// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));
export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const addPost = (data: any)=>({
  type: ADD_POST_REQUEST,
  data
})

export const dummyPost = (data:any)=>({
  id: data.id,
  User: {
    id: 1,
    nickname: 'zerocho',
  },
  serve: data.serve,
  category: data.category,
  Ingredients: data.ingredients,
  image: data.image,
  Recipes: data.recipes,
  link: 'https://www.10000recipe.com/recipe/6878480'
});

const reducer = (state=initialState, action:any) => {
  return produce(state, (draft:any) => {
    switch(action.type){
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((v:any)=> v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      default:
        return state;
    }
  });

};

export default reducer;