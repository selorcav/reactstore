import React from 'react'
import { makeStyles, Card, CardMedia, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Box } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ItemCount from '../ItemListContainer/Items/ItemCount';

const useStyles = makeStyles(theme => ({
  cardImage: {
    height: '300px'
  },
  textCenter: {
    textAlign: 'center'
  }
}))


const ItemDetail = ({ productos }) => {
  // console.log(productos)
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
            <ItemCount stock={productos.stock} initial={0} onAdd={0} />
          </Grid>
        </Box>

      </CardContent>
    </Card>
  )
}

export default ItemDetail
