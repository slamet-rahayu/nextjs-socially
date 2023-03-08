export interface ILoginReq {
  identifier: string;
  password: string;
}

export interface IRegisterReq extends ILoginReq {
  username: string;
}

export interface IAuthRes {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IResFailed {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: object;
  };
}

export interface ILoginState {
  login: {
    isLoading: boolean;
    isError: boolean;
    loginRes: IAuthRes;
    loginFailed: IResFailed;
  };
}

export interface IRegisterState {
  register: {
    isLoading: boolean;
    isError: boolean;
    registerRes: IAuthRes;
    registerFailed: IResFailed;
  };
}
