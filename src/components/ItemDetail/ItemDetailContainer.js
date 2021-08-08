import { React, useEffect, useState} from 'react'
import {Typography, Container} from '@material-ui/core/'
import ItemDetail from './ItemDetail'

import {productos} from "../ItemListContainer/Items/productos"


const ItemDetailContainer = () => {


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
    <Container >
      <Typography variant="h4" color="secondary">ItemDetailContainer</Typography>
      {products.map(products=>{
        return <ItemDetail productos={products} key={products.id}/>
      })}
    </Container>
  )
}

export default ItemDetailContainer
