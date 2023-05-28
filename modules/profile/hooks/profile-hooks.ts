import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setClearAuth } from 'modules/auth/auth-action';

export default function useProfile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    dispatch(setClearAuth());
    router.replace('/login');
  };

  return {
    logout
  };
}
