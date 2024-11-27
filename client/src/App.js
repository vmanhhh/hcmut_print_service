import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import BuyPaperPage from "./pages/BuyPaperPage";

const clientId = "805088220575-7e7a127038e1hrk80cef6so8c9kmg089.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/print" element={<HomePage />} />
            <Route path="/log" element={<HomePage />} />
            <Route path="/buypaper" element={<BuyPaperPage />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

