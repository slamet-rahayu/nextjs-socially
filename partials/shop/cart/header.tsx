import { Typography, Box } from '@mui/material';
import { ReactElement } from 'react';

export default function HeaderCart(): ReactElement {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body1">Cart</Typography>
    </Box>
  );
}
