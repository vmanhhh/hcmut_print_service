import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React, { useState } from 'react';
import BuyPaper from "./components/buyPaper/buypaper";
import Login from "./components/login/login";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className='app'>
        <Navbar />
        <Login/>
    </div>
    <Footer/>
    </>
  );
}

export default App;