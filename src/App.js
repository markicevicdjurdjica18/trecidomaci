import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tabela from './components/Tabela';
import DanDetaljno from './components/DanDetaljno';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/vreme/:dan'>
          <DanDetaljno />
        </Route>
        <Route path='/tabela'>
          <Tabela />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
