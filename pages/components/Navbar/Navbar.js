import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Container } from '@mui/system';



const drawerWidth = 240;
const navItems = [
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Clientes', path: '/clientes' },
  { name: 'Contacto', path: '/contacto' }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" passHref legacyBehavior>
          <IconButton edge="start" color="inherit" aria-label="menu">
              <img src="/static/logoblack.svg" alt="logo" style={{height: '24px'}} />
            </IconButton>
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link style={{ textDecoration: 'none' }} href={item.path} passHref>
              <ListItemButton sx={{ textAlign: 'center', color: '#111'}}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#000'}}>
        <Toolbar>
          <Box sx= {{  display: { sm: 'none'} }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/" passHref legacyBehavior>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <img src="/static/logo.svg" alt="logo" style={{height: '24px'}} />
                </IconButton>
              </Link>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Container>
          </Box>
  
          <Container sx={{ display: 'flex'}}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href="/" passHref legacyBehavior>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <img src="/static/logo.svg" alt="logo" style={{height: '24px'}} />
                </IconButton>
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
              {navItems.map((item) => (
                <Link style={{ textDecoration: 'none' }} href={item.path} passHref key={item.name}>
                  <Button sx={{color: '#fff', textTransform: 'capitalize' }}>{item.name}</Button>
                </Link>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
