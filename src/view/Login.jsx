import { Box, Button, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { loginService } from '../service/loginService';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, updateUserData } from '../store/slice/userSlice';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const userIsLogged = useSelector((state) => state.user.loggin);
  const dispatch = useDispatch();

  const login = async (data) => {
    const loginData = await loginService(data);

    const userData = {
      name: loginData.name,
      lastName: loginData.lastName,
      email: loginData.email,
      password: loginData.password,
      profile: loginData.profile,
      unit: loginData.unit,
    };

    dispatch(updateUserData(userData));
    dispatch(logIn());
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Ingrese datos de correo').required('Email es requerido'),
      password: Yup.string().max(100).required('Escribe la contraseña'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log(values);
        await login(values);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
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
      <Stack
        direction="column"
        component="form"
        spacing={1}
        sx={{ maxWidth: 300 }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          name="email"
          type="email"
          label="Usuario o Email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          name="password"
          type="password"
          label="Contraseña"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit">Ingresar</Button>
      </Stack>
      {userIsLogged && <Navigate to="/foodchek" />}
    </Box>
  );
};

export default Login;
