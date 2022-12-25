import { ReactElement } from 'react';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import ShopLayout from 'components/shop-layout';
import ShopCarousel from 'partials/shop/carousel';
import Recommended from 'partials/shop/recommended-categ';

function ShopPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Jual Beli online Termurah Se Indonesia Raya Merdeka! Merdeka!</title>
      </Head>
      <Container maxWidth="xl">
        <Box>
          <ShopCarousel />
          <Recommended />
        </Box>
      </Container>
    </>
  );
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default ShopPage;
