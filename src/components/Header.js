import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import {Divider} from '@mui/material'
import{Drawer} from '@mui/material'
import Logo from "../images/logo.png"
import "../style/HeaderStyles.css";
import { NavLink } from 'react-router-dom';


function Header(){
  const[mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  function handleDrawerToogle() {
    setMobileOpen(!mobileOpen);
  }

//Menudrawer
  function drawer() {
    return (
      <Box onClick={handleDrawerToogle} sx={{ textAlign: 'center' }}>
        <Typography
          color={"goldenrod"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2 }}>
           <img src={Logo} alt="Logo" style={{
            height:"70px",
            width: "auto" 
           }} />
        </Typography>
        <Divider />
        <ul className='mobile-navigation'>
          <li>
            <NavLink activeClassName="active" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={'/category'}>Category</NavLink>
          </li>
          <li>
            <NavLink to={'/login'}>Login</NavLink>
          </li>
        </ul>

      </Box>
    );
  }
  return (
    <>
  <Box>
    <AppBar component={'nav'} sx={{bgcolor: "whitesmoke"}}>
      <Toolbar>
        <IconButton 
        color="inherit"
         aria-label="open drawer" 
         edge="start" sx={{
          mr: 2,
          display: "block",
        }}
        onClick={handleDrawerToogle}
        >
          <MenuOpenIcon style={{ color: "black" }}/>
        </IconButton>
        <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1}}>
          <img src={Logo} alt="Logo" className='logo-image' style={{
            height: "70px",
            width: "auto",
          }}/>
        </Typography>
        <Box sx={{display: {xs:'none', sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName="active" to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/category"}>Category</NavLink>
            </li>
            
          </ul>


        </Box>
      </Toolbar>
    
     
    </AppBar>
    <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen}
            onClose={handleDrawerToogle}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: "240px",
              },
            }}>
            {drawer()}{
              
            }
          </Drawer>


        </Box>

  </Box>
        </>
  )
}

export default Header