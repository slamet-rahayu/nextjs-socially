import { ReactElement } from 'react';
import { Container } from '@mui/material';
import Head from 'next/head';
import ShopLayout from 'components/shop-layout';
import ShopCartPart from 'partials/shop/cart';

function CartPage() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Container maxWidth="xl">
        <ShopCartPart />
      </Container>
    </>
  );
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};

export default CartPage;
