import {
  Box,
  ButtonBase,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import logo from '../../assets/ikaro.jpg';
import { Scrollbar } from '../common/ScrollBar';
import { useSelector } from 'react-redux';

const modules = [
  {
    module: 'Consulta cantidades',
    path: '/foodchek',
    icon: (
      <SvgIcon>
        <LocalDiningIcon />
      </SvgIcon>
    ),
  },
  {
    module: 'Pedidos',
    path: '/foodorder',
    icon: (
      <SvgIcon>
        <LocalDiningIcon />
      </SvgIcon>
    ),
  },
];

const Modules = (props) => {
  const { name, lastName } = useSelector((state) => state.user);
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [moduleActivated, setModuleActivated] = useState(null);

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ p: 3 }}>
          <Box
            href="/"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <img src={logo} className="w-14 rounded rounded-[50%] h-10 m-22" />
            <Typography variant="h5" className="italic">
              <span className="text-slate-200">Le</span>
              <span className="text-red-500">Ciel</span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              mt: 3,
              p: '12px',
            }}
          >
            <Typography variant="body2" color="inherit">
              Bienvenido :
            </Typography>
            <Typography color="neutral.400">{name + ' ' + lastName}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {modules.map((module) => {
              return (
                <ButtonBase
                  component="a"
                  href={module.path}
                  sx={{
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    pl: '16px',
                    pr: '16px',
                    py: '6px',
                    textAlign: 'left',
                    width: '100%',

                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    },
                  }}
                >
                  <Box sx={{ px: 1, color: 'neutral.400' }}>{module.icon}</Box>
                  <Typography
                    sx={{
                      color: 'neutral.300',
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontWeight: 600,
                      lineHeight: '24px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {module.module}
                  </Typography>
                </ButtonBase>
              );
            })}
          </Stack>
        </Box>

        <Divider />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography>Para alguna consulta llamar al 948305784</Typography>
        </Box>
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
        sx={{ display: 'block', displayPrint: 'none' }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
        display: 'block',
        displayPrint: 'none',
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default Modules;
