import { HomeComponent } from 'modules/home/screen';
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

function HomePage(props): ReactElement {
  return <HomeComponent />;
}



export default HomePage;
