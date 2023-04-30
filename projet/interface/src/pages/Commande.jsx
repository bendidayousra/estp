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
import './style.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios'
import  { useState , useEffect} from 'react'
import { Card } from 'react-bootstrap';
const drawerWidth = 240;
const navItems = ['je veux poster '];

function Commande(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [liv, setLiv] = useState([]);
  const getLiv = async () =>{
    const response = await axios.get('http://127.0.0.1:8000/liste/')
    setLiv(response.data)
  }
  useEffect(()=>{
    getLiv();
  }, []) 
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      GetCommande
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            <ListItem key={item} disablePadding>
            <ListItemButton
            component={Link}
            to="/formulaire"
            sx={{ textAlign: 'center' }}
            >
            <ListItemText primary="Formulaire" />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            GetCommande
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}   component={Link}
            to="/formulaire" >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       <h1 className='Title'>tout les commandes</h1>
       <div className='cc'>
       {liv.map((liv, index) => (
        
  <Card className='m-2 rounded  card shadow-lg' col-3 style={{width:'100%' }}>
    <Card.Img Variant="top" src={liv.image} />
    <Card.Body>
    <Card.Title>{liv.nom}</Card.Title>
    <Card.Text>{liv.prenom}</Card.Text>
    <Card.Text>{liv.adresse}</Card.Text>
    <Card.Text>{liv.tel}</Card.Text>
    <Card.Text>{liv.description}</Card.Text>
    </Card.Body>
  </Card>
 
))}
</div>
      </Box>
    </Box>
  );
}

Commande.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Commande;