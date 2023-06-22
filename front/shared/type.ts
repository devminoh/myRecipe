export {};

export interface PropTypes {
  post: PostType;
}

export interface PostType {
  id: number;
  User: UserType;
  serve: number;
  category: string;
  Ingredients: IngredientsType[];
  image: string;
  Recipes: RecipeType[];
  link: string;
}

export interface UserType {
  id: number;
  nickname: string;
}

export interface IngredientsType {
  name: string;
}

export interface RecipeType {
  recipe: string;
}