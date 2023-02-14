import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LOGIN_SUCCESS, SET_LOGIN_FAILED } from '../auth-constant';
import { setLogin } from '../auth-action';
import { ILoginReq, ILoginRes } from '../interface/login';

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [loginResponse, setloginResponse] = useState<ILoginRes | null>(null);

  const dispatch = useDispatch();

  const {
    login: { action }
  } = useSelector((state: any) => state);

  useEffect(() => {
    console.log({ action });
  }, [action]);

  const dispatchLogin = (payload: ILoginReq) => dispatch(setLogin(payload));

  return {
    isLoading,
    isError,
    loginResponse,
    dispatchLogin
  };
}
