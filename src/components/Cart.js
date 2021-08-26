import {React, useContext} from 'react'
import Typography from '@material-ui/core/Typography'
import {CartContext} from './CartContext'
import Button from '@material-ui/core/Button'




const Cart = () => {

  const {cart, removeItem, clear} = useContext(CartContext)

  console.log(cart)

  return (
    <div>
      <Typography variant="h1" color="primary">CART</Typography>
      {cart.map(prod =>
        <div key={prod.item.item.id}>
          {prod.item.item.title} - 
          {prod.item.item.price} - 
          {prod.item.quantity}
          <Button variant="contained" color="secondary" onClick={() => removeItem(prod.item.id)}>
            Borrar del carrito
          </Button>
        </div>
        )}
        <Button variant="contained" color="primary" onClick={clear}>
          Quitar todos los productos
        </Button>
    </div>
  )
}

export default Cart
