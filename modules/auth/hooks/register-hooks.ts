import { useSelector, useDispatch } from 'react-redux';
import { setRegister, setRegisterClear } from '../auth-action';
import { IRegisterReq, IRegisterState } from '../interface/auth';

export default function useRegister() {
  const dispatch = useDispatch();

  const {
    register: { isLoading, registerFailed, registerRes }
  } = useSelector((state: IRegisterState) => state);

  const dispatchRegister = (payload: IRegisterReq): void => {
    dispatch(setRegister(payload));
  };

  const clearRegisterState = (): void => {
    dispatch(setRegisterClear());
  };

  return {
    isLoading,
    registerFailed,
    registerRes,
    dispatchRegister,
    clearRegisterState
  };
}
