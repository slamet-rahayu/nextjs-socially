/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import MatoaLogo from 'public/matoa-logo.png';
import styles from 'styles/components/layout.module.scss';
import SearchIcon from 'public/search.svg';
import checkAuth from 'hooks/utils/checkAuth';

interface ILayout {
  children: React.ReactNode;
}

const Payment = [
  { name: 'Bank BNI', src: '/BNI.png' },
  { name: 'Bank Danamon', src: '/DANAMON.png' },
  { name: 'Gopay', src: '/GOPAY.png' },
  { name: 'Kredivo', src: '/KREDIVO.png' },
  { name: 'Mandiri', src: '/MANDIRI.png' },
  { name: 'Mastercard', src: '/MASTERCARD.png' },
  { name: 'Standard Chartered', src: '/STANDARDCHARTERED.png' },
  { name: 'Uob', src: '/UOB.png' },
  { name: 'Visa', src: '/VISA.png' }
];

function NavLink(): React.ReactElement {
  return (
    <nav>
      <ul className={styles.ul_nav}>
        <li>
          <Link href="/watches">
            <a>
              <Typography fontFamily="taviraj">Watches</Typography>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/eyewear">
            <a>
              <Typography fontFamily="taviraj">Eyewear</Typography>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>
              <Typography fontFamily="taviraj">News</Typography>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/accessories">
            <a>
              <Typography fontFamily="taviraj">Accessories</Typography>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Header(): ReactElement {
  checkAuth.useCheckAuth();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={styles.toolbar} disableGutters>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item lg={4} alignItems="center" display="flex">
              <Image src={MatoaLogo} alt="Matoa Indonesia" width={178} height={22} />
            </Grid>
            <Grid item lg={4}>
              <NavLink />
            </Grid>
            <Grid item lg={4} alignItems="center" justifyContent="flex-end" display="flex">
              <Image src={SearchIcon} width={32} height={32} />
              <Box className={styles.toolbar_link}>
                <Box display="flex" alignItems="center">
                  <Image src="/user.svg" width={24} height={24} />
                  <Typography sx={{ marginLeft: '8px' }} fontFamily="Taviraj">
                    Log In
                  </Typography>
                </Box>
                <Box className={styles.toolbar_cart_icon}>
                  <Image src="/cart.svg" width={24} height={24} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

function Footer(): ReactElement {
  return (
    <Box>
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {Payment.map((v) => (
              <Box key={v.name}>
                <Image width={100} height={100} src={v.src} alt={v.name} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg" />
      </Box>
    </Box>
  );
}

export default function Layout(props: ILayout): ReactElement {
  const { children } = props;
  return (
    <Box className={styles.root}>
      <Header />
      <Container maxWidth="xl">
        <Box>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
}
