
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
  postAdded: false,
}

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";

export const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST
}

export const dummyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: '부기초',
  },
  serve: 2,
  category: '밥',
  Ingredients: [{
    name: '차돌박이 400g'
  },{
    name: '연근 100g',
  }],
  image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/10/24/764997128d46175796f547a5967a30871.jpg',
  Recipes: [{
    recipe: '솥밥을 만들기위해 쌀 2인분은 미리 깨끗이 씻어 30분여정도 불려줍니다.'
  },{
    recipe: '한우 불고깃감은 듬성듬성 썰어주었어요~'
  },{
    recipe: '연근은 원형 모양을 살리면 좀 큰 듯 싶어서 1/2등분후 얇게 슬라이스하고 식촛물에 담궈 잡내를 없애주었습니다.'
  }],
  link: 'https://www.10000recipe.com/recipe/6878480'
}

const reducer = (state=initialState, action:any) => {
  switch(action.type){
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;