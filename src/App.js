import { React} from 'react';
import './App.css'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartProvider from './components/CartProvider';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path={["/", "/category/:id"]}>
              <ItemListContainer greeting="mensaje desde el app.js" />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
