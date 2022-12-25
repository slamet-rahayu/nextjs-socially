import { ReactElement } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function FooterShop(): ReactElement {
  return (
    <Box sx={{ flexGrow: 1, borderTop: '1px solid #e8e8e8', pt: 2 }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={4}>
            <Typography variant="h6">News</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
