import React from 'react'
import { Button} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const CartWidget = () => {
  return (
    <>
      <Button variant="contained" color="secondary">
        <ShoppingCartOutlinedIcon />
      </Button>
    </>
  )
}

export default CartWidget
