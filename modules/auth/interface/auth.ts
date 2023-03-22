export interface ILoginReq {
  identifier: string;
  password: string;
}

export interface IRegisterReq {
  username: string;
  email: string;
  password: string;
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

export interface IAuthState {
  auth: {
    userData: {
      jwt: string;
      user: {
        id: string;
        username: string;
        email: string;
        provider: string;
        confirmed: string;
        blocked: string;
        createdAt: string;
        updatedAt: string;
      };
    };
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
