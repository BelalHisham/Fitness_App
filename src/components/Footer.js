import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' >
    <Stack gap = '40px' alignItems= 'center' px = '40px' >

    <img src={Logo}  width = '200px' height = '40px' />
    <Typography variant='h5' pb = '5px' mt = '20px'> Made by Belal Hisham</Typography>
    <Typography mb= '15px'>&copy; Copyright 2023 Belal Hisham</Typography>

    </Stack>

    </Box>
  )
}

export default Footer