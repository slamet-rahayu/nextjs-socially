import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import ShopSidebar from './sidebar';
import ShopProductList from './products';

export default function ShopProductPart(): ReactElement {
  return (
    <Grid container>
      <Grid item lg={2}>
        <ShopSidebar />
      </Grid>
      <Grid item lg={10}>
        <ShopProductList />
      </Grid>
    </Grid>
  );
}
