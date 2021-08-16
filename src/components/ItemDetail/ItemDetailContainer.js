import { React, useEffect, useState} from 'react'
import {Typography, Container} from '@material-ui/core/'
import ItemDetail from './ItemDetail'

import {productos} from "../ItemListContainer/Items/productos"
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {


  const [products, setProducts] = useState([])
  const params = useParams()
  

  useEffect(() => {
    const getItems = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        // resolve(productos)
        if(params.id){
          resolve(productos.filter(p=>p.id == params.id) )
        }else{
          resolve(productos)
        }
      }, 2000)
    })
    getItems.then((productos)=>{
      return setProducts(productos)
    })
    // console.log(params.id)
  }, [params.id])

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
