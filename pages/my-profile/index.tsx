import { ReactElement } from 'react';
import { wrapper } from 'modules/container/redux/store';
import { ProfileMain } from 'modules/profile/screen';
import { requireLogin } from 'utils/function';

function ProfilePage(): ReactElement {
  return <ProfileMain />;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (): Promise<any> => {
  return requireLogin(store);
});

export default ProfilePage;
