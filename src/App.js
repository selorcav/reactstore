import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={["/", "/category/:id"]}>
            <ItemListContainer greeting="mensaje desde el app.js" />
          </Route>
          <Route  path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
