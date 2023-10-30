import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user token exists in local storage
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      // User is logged in
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, []);

  return (
    <Routes>
      <Route path = "/" element = {<Layouts/>}>
        <Route index element = {<Public/>}/>
        <Route path = "login" element = {<LoginPage/>}/>
        <Route path = "register" element = {<RegisterPage/>}/>

        {userLoggedIn ? (
          <>
            <Route path = "dashboard">
              <Route index element = {<HomePage/>}/>
              <Route path = "home" element = {<HomePage/>}/>
              <Route path = "tracker" element = {<TrackerPage/>}/>
              <Route path = "summary" element = {<SummaryPage/>}/>
            </Route>
          </>
        ) : (
          () => <Navigate to="/" />
        )}

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Error />} />

      </Route>
    </Routes>
  );
}

export default App;