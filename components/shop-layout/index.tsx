import { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';
import FooterShop from './footer';
import HeaderShop from './header';

interface ILayoutProps {
  children: ReactNode;
}

export default function ShopLayout({ children }: ILayoutProps): ReactElement {
  return (
    <>
      <HeaderShop />
      <Box sx={{ mb: 10, mt: 5, minHeight: '60vh' }}>{children}</Box>
      <FooterShop />
    </>
  );
}
