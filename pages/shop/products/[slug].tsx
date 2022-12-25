import { Container } from '@mui/material';
import { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ShopLayout from 'components/shop-layout';
import ProductDetailPart from 'partials/shop/products/detail';

export default function ProductDetail(): ReactElement {
  const router = useRouter();
  const {
    query: { slug }
  } = router;
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <Container maxWidth="xl">
        <ProductDetailPart />
      </Container>
    </>
  );
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <ShopLayout>{page}</ShopLayout>;
};
