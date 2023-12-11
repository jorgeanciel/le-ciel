import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../store/slice/userSlice';
import Modules from '../components/layout/Modules';
import { styled, alpha } from '@mui/material/styles';

const Layout = () => {
  const [openNav, setOpenNav] = useState(false);
  const [anchorUser, setAnchorUser] = useState(null);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const dispatch = useDispatch();

  const handleOpenUserMenu = (e) => {
    setAnchorUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280,
    },
  }));

  const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
  });

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),

          left: {
            lg: `280px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - 280px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
          display: 'block',
          displayPrint: 'none',
        }}
      >
        <Stack
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          spacing={2}
          sx={{
            minHeight: 68,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp && (
              <Tooltip title="Menu">
                <IconButton onClick={() => setOpenNav(true)}>
                  <SvgIcon fontSize="small">
                    <Bars3Icon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
            )}
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Typography variant="h6">modo prueba</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography onClick={() => dispatch(reset())} component="a" href="/">
                  Log Out
                </Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      <Modules open={openNav} onClose={() => setOpenNav(false)} />
      <LayoutRoot>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};

export default Layout;
