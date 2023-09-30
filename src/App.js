import logo from './logo.svg';
import './App.css';
import Layouts from './components/Layouts';
import Public from './components/Public';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layouts/>}>
        <Route index element = {<Public/>}/>
      </Route>
    </Routes>
  );
}

export default App;