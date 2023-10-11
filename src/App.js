import logo from './logo.svg';
import './App.css';
import Layouts from './components/Layouts';
import Public from './components/public/Public';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layouts/>}>
        <Route index element = {<Public/>}/>
        <Route path = "login" element = {<LoginPage/>}/>
        <Route path = "register" element = {<RegisterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;