import { React, useEffect, useState} from 'react'
import { Container, Typography } from '@material-ui/core/';
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
        <ItemList products={products}  />
      </Container>
    </div>
  )
}

export default ItemListContainer
