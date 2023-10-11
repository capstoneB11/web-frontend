import logo from './logo.svg';
import './App.css';
import Layouts from './components/Layouts';
import Public from './components/public/Public';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';
import HomePage from './components/dashboard/home/HomePage';
import TrackerPage from './components/dashboard/tracker/TrackerPage';
import SummaryPage from './components/dashboard/summary/SummaryPage';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layouts/>}>
        <Route index element = {<Public/>}/>
        <Route path = "login" element = {<LoginPage/>}/>
        <Route path = "register" element = {<RegisterPage/>}/>

        <Route path = "dashboard">
          <Route index element = {<HomePage/>}/>
          <Route path = "home" element = {<HomePage/>}/>
          <Route path = "tracker" element = {<TrackerPage/>}/>
          <Route path = "summary" element = {<SummaryPage/>}/>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;