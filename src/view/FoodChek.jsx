import { Box, Stack, Table, TextField, Typography } from '@mui/material';
import React from 'react';

const FoodChek = () => {
  return (
    <>
      <Box>
        <Stack>
          <Stack>
            <Typography variant="h4">Consultas</Typography>
          </Stack>
          <Stack direction="row">
            <TextField label="Plato o comida" />
            <TextField label="N° Raciones" />
          </Stack>
        </Stack>
        <Box>
          <Table></Table>
        </Box>
      </Box>
    </>
  );
};

export default FoodChek;
