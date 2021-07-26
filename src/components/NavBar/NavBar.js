import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  Hidden,
  Box
} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logo.png'

import clsx from 'clsx';



const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1
  },
  list: {
    width: 250,
    backgroundColor: '#0a0506',
    height: '100vh',
    color: 'white'
  },
  fullList: {
    width: 'auto',
  },
  textWhite: {
    color: 'white',
  },
}))

const NavBar = (props) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem >
          <ListItemText> <img src={Logo} height="80" alt="" /> </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText> MI CUENTA </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText> CATEGORIAS </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText> CONTACTO </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="secondary">
            <ShoppingCartOutlinedIcon />
          </Button>
        </Box>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">

            <img src={Logo} height="80" alt="" />

            <div>
              <Hidden smDown>
                <Button variant="text" color="inherit">
                  Mi cuenta
                </Button>
                <Button variant="text" color="inherit">
                  Categorías
                </Button>
                <Button variant="text" color="inherit">
                  Contacto
                </Button>
                <Button variant="contained" color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Button>
              </Hidden>

              <Hidden mdUp>
                <div>
                  {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button className={classes.textWhite} onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </Hidden>
            </div>

          </Box>

        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  )
}

export default NavBar
