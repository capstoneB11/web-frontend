import logo from './logo.svg';
import './App.css';
import Layouts from './components/Layouts';
import Public from './pages/Public';
import { Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  HomePage,
  TrackerPage,
  SummaryPage
} from './pages';

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