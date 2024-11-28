import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import Login from "./components/login/login";
import InfoDialog from "./components/InfoDialog";
import BuyPaperPage from "./pages/BuyPaperPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const clientId =
  "805088220575-7e7a127038e1hrk80cef6so8c9kmg089.apps.googleusercontent.com";

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
    setDialogOpen(true);
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

  return (

    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <div className="app">
          <Navbar user={user} onAccountClick={() => setDialogOpen(true)} />
          <Routes>
            <Route
              path="/"
              element={user ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />}
            />
            <Route
              path="/buypaper"
              element={
                <ProtectedRoute user={user}>
                  <BuyPaperPage />
                </ProtectedRoute>
              }
            />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
        {user && (
          <InfoDialog
            open={dialogOpen}
            onClose={handleDialogClose}
            user={user}
            onLogout={handleLogout}
          />
        )}
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;