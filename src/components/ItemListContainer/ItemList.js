import React from 'react'
import Item from './Items/Item'
import { Grid, Typography  } from '@material-ui/core/';

const ItemList = ({products}) => {
  // console.log(products)
  
  return (
    <>
      <Typography variant="h3" color="secondary">Item List</Typography>
      <Grid container spacing={1} >
      {products.map(products=>{
        return <Item product={products} key={products.id}/>
      })}
      </Grid>
    </>
  )
}

export default ItemList
