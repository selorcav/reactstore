import { React, useContext } from 'react'
import { Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../CartContext'


const CartWidget = () => {
  const { cart} = useContext(CartContext)

  return (
    <>
      <Button variant="contained" color="secondary">
        <ShoppingCartOutlinedIcon />
        
      </Button>
    </>
  )
}

export default CartWidget
