import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar.js'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="mensaje desde el app.js"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
