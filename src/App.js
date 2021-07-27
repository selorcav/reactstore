import ItemListContainer from './components/ItemListContainer.js'
import NavBar from './components/NavBar/NavBar.js' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="mensaje desde el app.js"/>
    </div>
  );
}

export default App;
