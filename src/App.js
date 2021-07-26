import NavBar from './components/NavBar.js' 


import {Container} from '@material-ui/core/';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <h2>Las ofertas de la semana</h2>
      </Container>      
    </div>
  );
}

export default App;
