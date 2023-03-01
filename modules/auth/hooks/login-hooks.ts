import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../auth-action';
import { ILoginReq } from '../interface/login';

export default function useLogin() {
  const dispatch = useDispatch();

  const {
    login: { isLoading, isError, loginRes }
  } = useSelector((state: any) => state);

  const dispatchLogin = (payload: ILoginReq) => dispatch(setLogin(payload));

  return {
    isLoading,
    isError,
    loginRes,
    dispatchLogin
  };
}
