import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setLoginClear } from '../auth-action';
import { ILoginReq, ILoginState } from '../interface/auth';

export default function useLogin() {
  const dispatch = useDispatch();

  const {
    login: { isLoading, loginFailed, loginRes }
  } = useSelector((state: ILoginState) => state);

  const dispatchLogin = (payload: ILoginReq): void => {
    dispatch(setLogin(payload));
  };

  const clearLoginState = (): void => {
    dispatch(setLoginClear());
  };

  return {
    isLoading,
    loginFailed,
    loginRes,
    dispatchLogin,
    clearLoginState
  };
}
