import React from 'react';
import LoginForm from './pages/LoginForm';
import LoginPlayer from './pages/LoginPlayer'; 
import RegisterPlayer from './pages/RegisterPlayer';
import LoginCoach from './pages/LoginCoach';
import RegisterCoach from './pages/RegisterCoach';
import ProfilePage from './pages/ProfilePage';
import Tofm from './pages/Tofm';
import './App.css';
import Navbar from './Component/Navbar';
import Debut from './pages/debut';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";


function App() {
  /*localStorage.getItem("token")*/

  let routes = useRoutes([
    { path: "/LoginPlayer", element: <LoginPlayer /> },
    { path: "/RegisterPlayer", element: <RegisterPlayer /> },
    { path: "/LoginCoach", element: <LoginCoach /> },
    { path: "/RegisterCoach", element: <RegisterCoach /> },
    { path: "/Tofm", element: <Tofm /> },
    { path: "/login", element: <LoginForm /> },
    { path: "/navbar", element: <Navbar /> },
    { path: "/debut", element: <Debut /> },
    { path: "/profil", element: <ProfilePage /> },
  ]);
  return routes

}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

