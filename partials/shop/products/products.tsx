import { Box, Card, CardContent, CardMedia, Grid, Pagination, Typography } from '@mui/material';
import { ReactElement } from 'react';
import productsApi from 'hooks/api/products';
import useProductsHook from 'hooks/pages/products';
import CLink from 'components/Link';
import Link from 'next/link';
import styles from './styles/products.module.scss';

export default function ShopProductList(): ReactElement {
  const { data, isError, isLoading } = productsApi.useGetProuductsSaga();
  const { changePage } = useProductsHook();
  return (
    <Box>
      <Grid container spacing={5}>
        {!isError && !isLoading && data?.data.length > 0 && (
          <>
            {data.data.map((v) => {
              const imgUrl = `/strapi${v.attributes.image.data[0].attributes.url}`;
              return (
                <Grid item lg={3} key={v.id}>
                  <Link href={`/shop/products/${v.attributes.slug}?id=${v.id}`} passHref>
                    <CLink>
                      <Card className={styles.card}>
                        <CardMedia
                          component="img"
                          alt={v.attributes.name}
                          image={imgUrl}
                          height={250}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="body1"
                            fontWeight="bold"
                            fontFamily="Roboto"
                            component="div"
                          >
                            {v.attributes.name.substring(0, 100)}
                          </Typography>
                          <Typography>
                            {v.attributes.product_category.data.attributes.name}
                          </Typography>
                          <Typography>$ {v.attributes.price}</Typography>
                        </CardContent>
                      </Card>
                    </CLink>
                  </Link>
                </Grid>
              );
            })}
            <Grid item lg={12} display="flex" justifyContent="flex-end">
              <Pagination
                count={data.meta.pagination.total / data.meta.pagination.limit}
                onChange={(e, p) => changePage(p)}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
