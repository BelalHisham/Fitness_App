import React from 'react';
import { Link } from 'react-router-dom';
import {  Stack } from '@mui/system';
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

import LogoRat from '../assets/images/LogoRat.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Navbar = () => {

  const {logout} = useLogout()
  const {user} = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <Stack direction= "row" justifyContent = "space-around"  sx={{gap: {sm: "122px", xs: "40px"}, 
    mt: {sm: "32px", xs: "20px"}, justifyContent : "none"}} px = "20px"  >
      <Link to= "/">
        <img src= {LogoRat} alt = "Logo" style={{width: "58px", height: "58px", margin: "-18px 8px", position:'fixed', zIndex: '1'}} />
      </Link>

      <Stack 
      direction= "row"
      gap = "40px"
      fontSize = "24px"
      alignItems= "flex-end"
      position= 'fixed'
      zIndex= '1'
      ml= '90px'
      
      
      
      
      >
        <Link to = "/" style={{textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625"}}>Home</Link>
        <a href='#exercises' style={{textDecoration: "none", color: "#3A1212"}}>Exercises</a>
        <Link to = "/bmi-calc" style={{textDecoration: "none", color: "#3A1212"}}>BMI calculator</Link>

       {!user && (
        <div>
          <Link to= '/login' style={{textDecoration: "none", color: "#3A1212", marginRight: '40px'}} >Login</Link>
          <Link to= '/signup' style={{textDecoration: "none", color: "#3A1212"}} >Sign up</Link>
        </div> )}
        
        
      </Stack>
      { user &&(
        <div style={{position: 'absolute', right: '50px'}}>
        <span style={{fontSize: '20px'}}> <EmailOutlinedIcon sx={{position: 'relative', top: '5px'}} /> <strong> {user.email}</strong>  </span>
          <button style={{
              background: '#fff',
              color: '#FF2625',
              border:' 2px solid #FF2625',
              padding: '6px 10px',
              borderRadius: '4px',
              fontFamily: "Poppins",
              cursor: 'pointer',
              fontSize: '1em'
          }} onClick={handleClick}> Log out</button>
        </div>
        )}
    </Stack>
  )
}

export default Navbar