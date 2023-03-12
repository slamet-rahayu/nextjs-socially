import { IResFailed } from 'modules/auth/interface/auth';

export interface IGetProfileRes {
  id: number;
  username: string;
  email: string;
  fullname: string;
  city: string;
  bio: string;
}

export interface IGetProfileState {
  getProfile: {
    isLoading: boolean;
    isError: boolean;
    getProfileRes: IGetProfileRes;
    getProfileFailed: IResFailed;
  };
}
