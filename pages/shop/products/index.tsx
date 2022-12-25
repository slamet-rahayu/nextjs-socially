import { ReactElement } from 'react';
import { Container } from '@mui/material';
import Head from 'next/head';
import ShopLayout from 'components/shop-layout';
import ShopProductPart from 'partials/shop/products';

function ShopProductPage(): ReactElement {
  return (
    <>
      <Head>
        <title>
          Belanja kebutuhan apapun terlengkap, termurah se Indonesia Buktikan Sendiri dan rasakan
          kenikmatannya
        </title>
      </Head>
      <Container maxWidth="xl">
        <ShopProductPart />
      </Container>
    </>
  );
}

ShopProductPage.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default ShopProductPage;
