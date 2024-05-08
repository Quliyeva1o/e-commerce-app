import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function ClientHeader() {

  return (
      <AppBar position='relative' >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button><Link to={"/"}>Home</Link></Button>
            <Button><Link to={"/products"}>products</Link></Button>
            <Button><Link to={"/basket"}>basket</Link></Button>
            <Button><Link to={"/login"}>login</Link></Button>
            <Button><Link to={"/user"}>user</Link></Button>
            <Button><Link to={"/register"}>register</Link></Button>
            <Button><Link to={"/contact-us"}>contact us</Link></Button>
          
          </Box>
        </Toolbar>
      </AppBar>
    
  );
}

export default ClientHeader;
