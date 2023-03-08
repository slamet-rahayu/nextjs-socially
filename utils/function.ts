export function requireLogin(store: any, props = {}) {
  const {
    auth: { userData }
  } = store.getState();
  if (!userData.jwt) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      },
      props: { isLoggedIn: false, ...props }
    };
  }
  return { props: { isLoggedIn: false, ...props } };
}
