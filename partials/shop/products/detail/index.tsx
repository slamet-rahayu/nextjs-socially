import { Box, Button, Dialog, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import Image from 'next/image';
import products from 'hooks/api/products';
import usePDHooks from 'hooks/pages/product-detail';
import { useRouter } from 'next/router';

interface ICartModal {
  isOpen: boolean;
  onClose: () => void;
}

function CartDialog({ isOpen, onClose }: ICartModal): ReactElement {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Box sx={{ p: 2 }}>
        <Typography sx={{ mb: 2 }} variant="h6" textAlign="center">
          Added to cart
        </Typography>
        <Box>
          <Button sx={{ mr: 1 }} type="button" variant="contained">
            Continue Shopping
          </Button>
          <Button type="button" variant="contained">
            Go to payment page
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default function ProductDetailPart(): ReactElement {
  const router = useRouter();
  const { toggleDialog, isModalOpen } = usePDHooks();
  const {
    query: { id }
  } = router;
  const { isError, isLoading, data } = products.useGetProuductSaga(id);
  return (
    <Grid container>
      {!isLoading && !isError && data?.data && (
        <>
          <Grid item lg={3} sx={{ textAlign: 'center' }}>
            <Image
              src={`http://localhost:1337${data.data.attributes.image.data[0].attributes.url}`}
              alt={data.data.attributes.name}
              layout="fixed"
              width={250}
              height={314}
            />
          </Grid>
          <Grid item lg={9}>
            <Typography variant="h6">{data.data.attributes.name}</Typography>
            <Typography variant="body1">Stok: {data.data.attributes.stock}</Typography>
            <Box sx={{ my: 5 }}>
              <Button type="button" variant="contained" onClick={toggleDialog}>
                <Typography variant="body1">Add to cart</Typography>
              </Button>
            </Box>
            <Box>
              <Typography variant="h6">Deskripsi: </Typography>
              <Typography variant="h6">{data.data.attributes.description}</Typography>
            </Box>
          </Grid>
          <CartDialog isOpen={isModalOpen} onClose={toggleDialog} />
        </>
      )}
    </Grid>
  );
}
