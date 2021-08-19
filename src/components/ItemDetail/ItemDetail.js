import {React, useState, useContext} from 'react'
import { makeStyles, Card, CardMedia, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ItemCount from '../ItemListContainer/Items/ItemCount';
import { Link } from 'react-router-dom';

import {CartContext} from '../CartContext'

const useStyles = makeStyles(theme => ({
  cardImage: {
    height: '300px'
  },
  textCenter: {
    textAlign: 'center'
  },
  marginTop: {
    marginTop: '1em'
  }
}))

const ItemDetail = ({ productos }) => {
  // console.log(productos)

  const {addItem, removeItem} = useContext(CartContext)

  const [unidades, setUnidades] = useState(0)
  const [show, setShow] = useState(false)

  const onAdd = (cantidad) =>{
    setUnidades(cantidad)

    const item_to_add = {
      item : productos,
      quantity : cantidad
    }
    addItem(item_to_add)
    console.log(unidades)
    if(item_to_add.quantity > 0){
      setShow(true)
      // console.log('muestra')
    }else{
      setShow(false)
      // console.log('no muestra')
    }
  }


  const classes = useStyles()
  return (
    <Card>
      <CardMedia
        image={productos.pictureUrl}
        className={classes.cardImage}
      />
      <CardContent>
        <Typography className={classes.textCenter} variant="h2" color="secondary">{productos.title}</Typography>
        <Typography className={classes.textCenter} variant="h4" color="initial">{productos.brand}</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" color="secondary">Versiones y Caracteristicas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {productos.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Typography variant="h4" gutterBottom><Typography variant="body2" color="secondary">Precio:</Typography> $ {productos.price}</Typography>
        <Box display="flex" justifyContent="center" >
          <Grid item xs={12} sm={6}>
            <ItemCount stock={productos.stock} initial={0} onAdd={onAdd} />
          </Grid>
        </Box>
        <Box>
          <Button variant="contained" onClick={removeItem} color="secondary">
            Quitar del Carrito
          </Button>
        </Box>
        {  show ? <Link to={"/cart"}><Button className={classes.marginTop} size="large" variant="contained" color="secondary">Terminar mi compra</Button></Link> : <></>}

      </CardContent>
    </Card>
  )
}

export default ItemDetail
