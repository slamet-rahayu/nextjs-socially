import { ReactElement, useState, MouseEvent } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import userHooks from 'hooks/api/user';
import { useSelector } from 'react-redux';
import checkAuth from 'hooks/utils/checkAuth';
import ProductCategories from './product-categories';

export default function HeaderShop(): ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  checkAuth.useCheckAuth();
  const user = userHooks.useGetUserInfo();

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickCart = () => {
    router.push('/shop/cart');
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    router.reload();
  };

  const { isLoggedIn } = useSelector((state: any) => state.isloggedin);

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item lg={8} display="flex" justifyContent="space-between">
                <Image src="/tokopaedis.png" width={280} height={0} />
                <ProductCategories />
                <TextField
                  placeholder="Cari Powerbank"
                  fullWidth
                  sx={{ ml: 2, background: 'white', borderRadius: '5px' }}
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item lg={4} display="flex" justifyContent="flex-end">
                <Box display="flex">
                  <IconButton onClick={handleClickCart}>
                    <Badge badgeContent={10} color="warning" showZero={false}>
                      <ShoppingCartIcon sx={{ color: 'white' }} />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge badgeContent={6} color="warning" showZero={false}>
                      <NotificationsIcon sx={{ color: 'white' }} />
                    </Badge>
                  </IconButton>
                  <IconButton>
                    <Badge badgeContent={11} color="warning" showZero={false}>
                      <MailIcon sx={{ color: 'white' }} />
                    </Badge>
                  </IconButton>
                  <Box
                    sx={{
                      ml: 2,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#3886d3',
                      px: 1,
                      borderRadius: '5px'
                    }}
                  >
                    {/* {isLoggedIn && <Typography>{user.data.username}</Typography>} */}
                    <Typography variant="body2">{user.data.username}</Typography>
                    <IconButton
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <AccountCircle sx={{ color: 'white' }} />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button'
                      }}
                    >
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
