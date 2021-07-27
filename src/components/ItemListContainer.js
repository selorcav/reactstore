import React from 'react'

import { Container, Typography } from '@material-ui/core/';

const ItemListContainer = (props) => {
  return (
    <div>
      <Container>
        <Typography variant="h3" color="primary">Las ofertas de la semana</Typography>
        <Typography color="secondary">{props.greeting}</Typography>
      </Container>
    </div>
  )
}

export default ItemListContainer
