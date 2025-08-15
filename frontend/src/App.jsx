import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
