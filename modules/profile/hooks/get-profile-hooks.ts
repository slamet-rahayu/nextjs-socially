import { useSelector, useDispatch } from 'react-redux';
import { getProfile, getProfileClear } from '../profile-action';
import { IGetProfileState } from '../interface/profile-interface';

export default function useGetProfile() {
  const dispatch = useDispatch();

  const {
    getProfile: { getProfileRes, getProfileFailed, isLoading }
  } = useSelector((state: IGetProfileState) => state);

  const dispatchGetProfile = () => {
    dispatch(getProfile());
  };

  const clearGetProfile = () => {
    dispatch(getProfileClear());
  };

  return {
    isLoading,
    getProfileFailed,
    getProfileRes,
    dispatchGetProfile,
    clearGetProfile
  };
}
