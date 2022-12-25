import { ReactElement } from 'react';
import { Grid, IconButton, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const data = [1, 2, 3, 4, 5, 6];

export default function ShopCartPart(): ReactElement {
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Typography variant="body1">Cart</Typography>
      </Box>
      <Box sx={{ height: '310px', overflowY: 'scroll' }}>
        {data.map((v) => {
          return (
            <Grid container key={v}>
              <Grid item lg={1}>
                <Image
                  src="http://localhost:1337/uploads/north_america_company_reports_database_a089ae6f05.webp?updated_at=2022-06-11T15:09:36.043Z"
                  layout="fixed"
                  height={150}
                  width={100}
                />
              </Grid>
              <Grid item lg={11}>
                <Typography variant="body1">Buku Bangunan</Typography>
                <Typography variant="body2">$100</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="primary">
                    <AddIcon />
                  </IconButton>
                  <Typography variant="body2">2</Typography>
                  <IconButton color="warning">
                    <RemoveIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">Total Price: $1000</Typography>
        <Button sx={{ mt: 1 }} variant="contained" type="button">
          Checkout
        </Button>
      </Box>
    </>
  );
}
