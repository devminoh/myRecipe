import shortId from 'shortid';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '제로초',
    },
    serve: 1,
    category: '양식',
    Ingredients: [{
      name: '박력분 200g'
    },{
      name: '계란 2알',
    }],
    image: 'https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg',
    Recipes: [{
      recipe: '1번 레시피'
    },{
      recipe: '2번 레시피'
    },{
      recipe: '3번 레시피'
    }],
    link: 'https://www.10000recipe.com/recipe/6895534'
  }],
  imagePaths: '',
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
}

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = (data: any)=>({
  type: ADD_POST_REQUEST,
  data
})

export const dummyPost = (data:any)=>({
  id: shortId.generate(),
  User: {
    id: 2,
    nickname: '부기초',
  },
  serve: data.serve,
  category: data.category,
  Ingredients: data.ingredients,
  image: data.image,
  Recipes: data.recipes,
  link: 'https://www.10000recipe.com/recipe/6878480'
});

const reducer = (state=initialState, action:any) => {
  switch(action.type){
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
    default:
      return state;
  }
};

export default reducer;