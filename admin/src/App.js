import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Log from './pages/log/log';
import Request from './pages/request/request';
import Printer from './pages/printer/printer';
import LoginPage from './pages/LoginPage';

function App() {
  const [user, setUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Retrieve user information from localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setUser(user);
    setDialogOpen(false);
    // Store user information in localStorage
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleAccountClick = () => {
    setDialogOpen(true);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className='app-content'>
          <Routes>
            <Route path='/request' element={<Request />} />
            <Route path='/log' element={<Log />} />
            <Route path='/printer' element={<Printer />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
