import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
// import Image from 'next/image';

interface ICardProps {
  name?: string;
  age?: number;
  city?: string;
}

// function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
//   console.log(e.target.value);
// }

function Card(props: ICardProps): ReactElement {
  const { name, age, city } = props;
  return (
    <div className="rounded">
      <div>{name}</div>
      <div>{age}</div>
      <div>{city}</div>
    </div>
  );
}

Card.defaultProps = {
  name: '',
  age: 0,
  city: ''
};

export default function About(): ReactElement {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Aboout Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world! </h1>
      <div>
        <p>Hello</p>
        <Card name="Slamet Rahayu" age={23} city="Jakarta" />
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
