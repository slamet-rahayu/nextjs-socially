import { ReactElement, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import productCategory from 'hooks/api/product-categories';

export default function TestPage(): ReactElement {
  const { useGetPCategSaga } = productCategory;

  const { isError, isLoading, data } = useGetPCategSaga();

  useEffect(() => {
    console.log({ isError, isLoading, data });
  }, [isError, isLoading, data]);
  return (
    <Box>
      <Button type="button">test fetch with qs</Button>
    </Box>
  );
}
