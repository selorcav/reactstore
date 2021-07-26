import { AppBar, Toolbar, Button, makeStyles, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  title:{
    flexGrow: 1
  }
}))

const NavBar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar >
          <Typography className={classes.title}>
            Logo
          </Typography>
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
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  )
}

export default NavBar