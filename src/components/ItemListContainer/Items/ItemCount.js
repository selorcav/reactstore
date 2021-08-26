import { React, useState } from 'react';
import { Box, makeStyles, Button, } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
  marginTop: {
    marginTop: '1.5em'
  },
  fontSizeContador: {
    fontSize: '1.5em',
  }
}))

const ItemCount = ({producto, stock, initial, addItem, onAdd }) => {
  const classes = useStyles()

  const [contador, setContador] = useState(initial)
  const [sumarDisabled, setSumarDisabled] = useState(false)
  const [restarDisabled, setRestarDisabled] = useState(false)
  const [carritoDisabled, setCarritoDisabled] = useState(true)


  const sumarContador = () => {
    if (stock > contador) {
      setContador(contador + 1)
      const bloquearBoton = false
      setCarritoDisabled(bloquearBoton)
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
      const bloquearCarrito = true
      setCarritoDisabled(bloquearCarrito)
      setRestarDisabled(!restarDisabled)
    }
  }
  const confirmar = (e) => {
    if (stock > 0) {
      onAdd(contador)
    }

  }


  return (
    <>
      <Box display="flex" border={2} borderRadius="borderRadius" borderColor="secondary.main" justifyContent="space-between" alignItems="center">
        <Button className={classes.fontSizeContador} onClick={restarContador} variant="text" size="large" disabled={restarDisabled} color="secondary">-</Button>
        <Typography className={classes.fontSizeContador} variant="h6" color="primary">{contador}</Typography>
        <Button className={classes.fontSizeContador} onClick={sumarContador} variant="text" size="large" disabled={sumarDisabled} color="secondary">+</Button>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" disabled={carritoDisabled} onClick={() => { addItem(producto, contador); onAdd()}} className={classes.marginTop}>Agregar al Carrito</Button>
      </Box>
    </>
  )
}

export default ItemCount
