import { React, useEffect, useState} from 'react'

import { Container, Typography, Grid } from '@material-ui/core/';
import ItemCount from './Items/ItemCount';
import ItemList from './ItemList';

import {productos} from "./Items/productos"

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(productos)
      }, 2000)
    })
    promesa.then((productos)=>{
      setProducts(productos)
      // console.log(productos)
      // console.log(product)
    })
  })

  return (
    <div>
      <Container>
        <Typography variant="h3" color="primary">Las ofertas de la semana</Typography>
        <Typography color="secondary">{props.greeting}</Typography>
        <Grid container spacing={1}>
          <ItemCount stock={5} initial={1} onAdd={0} />
          <ItemCount stock={10} initial={3} onAdd={0} />
        </Grid>
        <ItemList products={products}  />
      </Container>
    </div>
  )
}

export default ItemListContainer
