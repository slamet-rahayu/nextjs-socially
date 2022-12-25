import { useEffect } from 'react';
import { IHookRes } from 'interface/res-api';
import { IUserRes } from 'interface/user';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'redux-local/actions/user';

interface IUserInfoState extends IHookRes<IUserRes> {
  userinfo: IHookRes<IUserRes>;
}

function useGetUserInfo(): IHookRes<IUserRes> {
  const userInfoCalls = useSelector((state: IUserInfoState) => state.userinfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    dispatch({ type: Actions.GET_USERINFO_REQUESTED, payload: jwtToken });
  }, [dispatch]);

  return {
    isLoading: userInfoCalls.isLoading,
    isError: userInfoCalls.isError,
    data: userInfoCalls.data
  };
}

export default {
  useGetUserInfo
};
