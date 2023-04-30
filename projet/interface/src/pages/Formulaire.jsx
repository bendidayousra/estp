import * as React from 'react';
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
import  { useState } from 'react'
import './style.css';


import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
const drawerWidth = 240;
const navItems = ['je veux livrer '];
const Formulaire = (props) => {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 
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
            to="/"
            sx={{ textAlign: 'center' }}
            >
            <ListItemText primary="Commande" />
            </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    const[nom , setNom] =useState("");
    const[prenom , setPrenom] = useState("");
    const[adresse , setAdresse] = useState("");
    const[tel , setTel] = useState("");
    const[image, setImage]= useState(null);
    const[description , setDescription] = useState("");

    const addLivraison = async() => {
        let formField = new FormData()

        formField.append('nom' , nom)
        formField.append('prenom' , prenom)
        formField.append('adresse' , adresse)
        formField.append('description' , description)
        if(image !== null){
            formField.append('image', image)
        }
        await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/liste/',
            data: formField
        }).then((response)=>{
            console.log(response.data);
            
        })
        
    }
  return (
    <>
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
            to="/" >
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
      <Box  sx={{p : 0 , width:'100%'}}>
        <Toolbar />
        <form  className='corps'>
    
    <div className='col-lg-12 col-md-12 col-sm-12'>
        <h1 className='Title mb-3 mt-5'>Formulaire</h1>
    </div>
    <div className='champ  '>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '46.5ch' }, }} noValidate autoComplete="off">
        <TextField id="standard-basic" name='nom' value={nom} onChange={(e) =>setNom(e.target.value)}  label="Nom" variant="outlined" />
   
        </Box>
    </div>  <div className='champ  '>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '46.5ch' }, }} noValidate autoComplete="off">
   
        <TextField id="standard-basic" name='prenom' value={prenom} onChange={(e) =>setPrenom(e.target.value)} label="Prenom" variant="outlined" />
        </Box>
    </div>
    <div className='champs col-lg-12 col-md-12 col-sm-12'>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '46.5ch' }, }} noValidate autoComplete="off">
        <TextField id="standard-basic" name='adresse' value={adresse} onChange={(e) =>setAdresse(e.target.value)} label="Adresse" variant="outlined" />
        </Box>
    </div>
    <div className='champs col-lg-12 col-md-12 col-sm-12'>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '46.5ch' }, }} noValidate autoComplete="off">
        <TextField id="outlined" label="Tel" name='tel' value={tel} onChange={(e) =>setTel(e.target.value)}  variant="outlined" />
        </Box>
    </div>
    <div className='champ mb-2 mt-2'>
    <input type="file"  name='image' src={image} multiple onChange={(e) =>setImage(e.target.files[0])}   className="form-control" id="custom-file"  />
    </div>
    <div className='champs col-lg-12 col-md-12 col-sm-12'>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '46.5ch' }, }} noValidate autoComplete="off">
        <TextField id="standard-basic"  name='description' value={description} onChange={(e) =>setDescription(e.target.value)} label="Description" variant="outlined" />
        </Box>
    </div>
    <div className='champs col-lg-12 col-md-12 col-sm-12'>
    <Button type="submit" onClick={addLivraison} className="btn btn-primary btn-sm">Envoyer</Button>
    </div>

    </form>

      </Box>
 
    </Box>
   

    </>
  )
}

export default Formulaire