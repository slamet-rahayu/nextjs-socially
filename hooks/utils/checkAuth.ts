import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Actions from 'redux-local/actions/login';

function useRedirectAuth(shouldLogin = true): void {
  const router = useRouter();
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (shouldLogin && !jwtToken) {
      router.replace('/login');
    }

    if (!shouldLogin && jwtToken) {
      router.back();
    }
  }, [router, shouldLogin]);
}

function useCheckAuth(): void {
  const dispatch = useDispatch();
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      dispatch({ type: Actions.SET_IS_LOGGEDIN, payload: true });
    } else {
      dispatch({ type: Actions.SET_IS_LOGGEDIN, payload: false });
    }
  }, [dispatch]);
}

export default {
  useRedirectAuth,
  useCheckAuth
};
