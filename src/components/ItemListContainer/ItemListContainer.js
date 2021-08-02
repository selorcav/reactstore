import React from 'react'

import { Container, Typography, Grid } from '@material-ui/core/';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  return (
    <div>
      <Container>
        <Typography variant="h3" color="primary">Las ofertas de la semana</Typography>
        <Typography color="secondary">{props.greeting}</Typography>
        <Grid container spacing={1}>
          <ItemCount stock={5} initial={1} onAdd={0} />
          <ItemCount stock={10} initial={3} onAdd={0} />
        </Grid>
      </Container>
    </div>
  )
}

export default ItemListContainer
