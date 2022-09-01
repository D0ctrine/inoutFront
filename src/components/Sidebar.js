import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { Typography } from '@mui/material';

const drawerSize = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerSize,
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'hidden',
        '&:hover': {
          overflowY: 'auto',
        },
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
            },
        }),
        },
    }),
    );
const Sidebar = () => {
    const { activeMenu,setActiveMenu} = useStateContext();

    const toggleDrawer = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <Drawer variant="permanent" open={activeMenu}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <Typography
              color="text.secondary"
              fontSize="4px"
              display="block"
              variant="caption"
              marginBottom="40px"
              fontFamily="bmjua"
            >
              하나마이크론
            </Typography>
          <div style={{width:'80%',textAlign:'center'}}>
            <NavLink to={'/'} style={{color: '#4169E1',fontSize:'30px',textDecoration:'none',marginRight:'5%',fontFamily:'bmjua'}}>내방반출입
            </NavLink>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
            </div>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
          <Footer/>
        </Drawer>
    );
}

export default Sidebar