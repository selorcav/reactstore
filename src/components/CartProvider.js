import { useState } from 'react'
import { Provider } from './CartContext'

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    // const new_cart = [...cart]
    // new_cart.push(item)
    // setCart(new_cart)
    
    const isInCart = cart.find((producto) => producto.item.item.id === item.item.id)
    if (!isInCart) {
      console.log(item.item.id)
        setCart([...cart, { item }])
      } else {
        
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter((producto) => producto.item.item.id === id))
    console.log(id)
  }

  const clear = () => {
    const limpiar = []
    setCart(limpiar)
  }


  return (
    <Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </Provider>
  )
}


export default CartProvider
