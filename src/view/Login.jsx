import { Box, Button, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ingrese datos de correo').required('Email es requerido'),
      password: Yup.string().max(100).required('Escribe la contraseña'),
    }),
    onsubmit: async () => {
      try {
      } catch (error) {}
    },
  });

  return (
    <Box>
      <Stack>
        <Box>
          <Typography>Bienvenido</Typography>
          <Typography>Sistema Le Ciel</Typography>
        </Box>
        <Box>
          <SvgIcon>
            <LocalPoliceIcon />
          </SvgIcon>
        </Box>
      </Stack>
      <Stack direction="column" component="form" spacing={1} sx={{ maxWidth: 300 }}>
        <TextField name="email" type="email" label="Usuario o Email" />
        <TextField name="password" type="password" label="Contraseña" />
        <Button type="submit">Ingresar</Button>
      </Stack>
    </Box>
  );
};

export default Login;
