import { ReactElement } from 'react';
import { LoginScreen } from 'modules/auth/screen';
import { wrapper } from 'modules/container/redux/store';

function LoginPage(): ReactElement {
  return <LoginScreen />;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (): Promise<any> => {
  const {
    auth: { userData }
  } = store.getState();
  if (userData.jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
      props: { isLoggedIn: true }
    };
  }
  return { props: { isLoggedIn: false } };
});

export default LoginPage;
