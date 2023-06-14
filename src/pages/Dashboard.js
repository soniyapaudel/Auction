import React from 'react';
import { ButtonBase, Menu, MenuItem } from '@mui/material';
import Layout from '../components/Layout/Layout';
import '../style/DropdownMenu.css';

function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Layout>
        <ButtonBase onClick={handleClick}>Open Menu</ButtonBase>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className="DropdownMenu" 
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Terms and Condition</MenuItem>
          <MenuItem onClick={handleClose}>Site</MenuItem>
        </Menu>
      </Layout>
    </>
  );
}

export default Dashboard;
