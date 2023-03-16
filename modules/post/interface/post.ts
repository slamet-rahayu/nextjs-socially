import { IResFailed } from 'modules/auth/interface/auth';

interface IpostImage {
  id: number;
  url: string;
}

export interface IGetPostResObj {
  id: number;
  caption: string;
  createdAt: string;
  post: IpostImage[];
  user_id: {
    id: number;
    username: string;
  };
  likes: object[];
  comments: object[];
}

export interface IGetPostState {
  getPost: {
    isLoading: boolean;
    isError: boolean;
    getPostRes: IGetPostResObj[];
    getPostFailed: IResFailed;
  };
}
