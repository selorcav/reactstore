import { useState } from 'react'
import { Provider } from './CartContext'

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    // const new_cart = [...cart]
    // new_cart.push(item)
    // setCart(new_cart)
    const isInCart = cart.find((producto) => producto.id === item.id)
    if (!isInCart) {
      setCart([...cart, { item }])
    } 
    console.log(cart)
  }

  const removeItem = (id) => {
    setCart(cart.filter((producto) => producto.id === id))
    console.log(id)
  }

  const clear = () => {
    console.log('clear')
  }

  // const isInCart = (id) => {}


  return (
    <Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </Provider>
  )
}


export default CartProvider
