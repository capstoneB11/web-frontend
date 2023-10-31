import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Layouts from './components/Layouts';
import Public from './pages/Public';
import {
  LoginPage,
  RegisterPage,
  HomePage,
  TrackerPage,
  SummaryPage
} from './pages';
import Error from './utils/Error';

function App() {

  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    // Check if the user token exists in local storage
    const userToken = localStorage.getItem('userToken');
    setUserToken(userToken)
  }, []);

  return (
    <Routes>
      <Route path = "/" element = {<Layouts/>}>
        <Route index element = {<Public/>}/>
        <Route path = "login" element = {<LoginPage/>}/>
        <Route path = "register" element = {<RegisterPage/>}/>

        <Route path="dashboard">
          <Route index element={<HomePage userToken={userToken} />} />
          <Route path="home" element={<HomePage userToken={userToken}/>} />
          <Route path="tracker" element={<TrackerPage userToken={userToken}/>} />
          <Route path="summary" element={<SummaryPage userToken={userToken} />} />
        </Route>

      </Route>

      <Route path="*" element={<Error />} />

    </Routes>
  );
}

export default App;