import React from 'react';
import { Link } from 'react-router-dom';
import { height, Stack } from '@mui/system';

import LogoRat from '../assets/images/LogoRat.png'

const Navbar = () => {
  return (
    <Stack direction= "row" justifyContent = "space-around" sx={{gap: {sm: "122px", xs: "40px"}, 
    mt: {sm: "32px", xs: "20px"}, justifyContent : "none" }} px = "20px">
      <Link to= "/">
        <img src= {LogoRat} alt = "Logo" style={{width: "58px", height: "58px", margin: "0 20px"}} />
      </Link>

      <Stack 
      direction= "row"
      gap = "40px"
      fontSize = "24px"
      alignItems= "flex-end"
      >
        <Link to = "/" style={{textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625"}}>Home</Link>
        <a href='#exercises' style={{textDecoration: "none", color: "#3A1212"}}>Exercises</a>
        <a href='#login' style={{textDecoration: "none", color: "#3A1212"}}>Login</a>
      </Stack>
    </Stack>
  )
}

export default Navbar