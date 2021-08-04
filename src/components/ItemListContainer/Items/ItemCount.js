import { React, useState } from 'react';
import { Box, Grid, makeStyles, Button, Card, CardContent } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
  marginTop: {
    marginTop: '1.5em'
  },
  fontSizeContador: {
    fontSize: '1.5em'
  }
}))

const ItemCount = ({ stock, initial, onAdd }) => {
  const classes = useStyles()

  const [contador, setContador] = useState(initial)
  const [sumarDisabled, setSumarDisabled] = useState(false)
  const [restarDisabled, setRestarDisabled] = useState(false)


  const sumarContador = () => {
    if (stock > contador) {
      setContador(contador + 1)
      if (restarDisabled === true) {
        setRestarDisabled(!restarDisabled)
      }
    } else {
      setSumarDisabled(!sumarDisabled)
    }
  }
  const restarContador = () => {
    if (contador > 0) {
      setContador(contador - 1)
      if (sumarDisabled === true) {
        setSumarDisabled(!sumarDisabled)
      }
    } else if (contador === 0) {
      setRestarDisabled(!restarDisabled)
    }
  }


  return (
    <>
      <Grid className={classes.marginTop} container item xs={12} sm={6} md={3} >
        <Card>
          <CardContent>
            <Typography variant="h6" color="primary">Contador actual: </Typography>
            <Box display="flex" border={2} borderRadius="borderRadius" borderColor="secondary.main" justifyContent="space-between" alignItems="center">
              <Button className={classes.fontSizeContador} onClick={restarContador} variant="text" size="large" disabled={restarDisabled} color="secondary">-</Button>
              <Typography className={classes.fontSizeContador} variant="h6" color="primary">{contador}</Typography>
              <Button className={classes.fontSizeContador} onClick={sumarContador} variant="text" size="large" disabled={sumarDisabled} color="secondary">+</Button>
            </Box>
            <Button variant="contained" color="primary" className={classes.marginTop}>Agregar al Carrito</Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ItemCount
