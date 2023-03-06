export interface ILoginReq {
  identifier: string;
  password: string;
}

export interface ILoginRes {
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

export interface ILoginFailed {
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
    loginRes: ILoginRes;
    loginFailed: ILoginFailed;
  };
}
