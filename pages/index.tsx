import { HomeComponent } from 'modules/home/screen';
import { ReactElement } from 'react';
import { wrapper } from 'modules/container/redux/store';
import { requireLogin } from 'utils/function';

function HomePage(): ReactElement {
  return <HomeComponent />;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (): Promise<any> => {
  return requireLogin(store);
});

export default HomePage;
