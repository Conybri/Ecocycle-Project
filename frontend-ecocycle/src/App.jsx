import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import HowItWorksPage from './pages/HowItWorksPage';
import CatalogPage from './pages/CatalogPage';
import CommunityPage from './pages/CommunityPage';
import BlogPage from './pages/BlogPage';
import BusinessPage from './pages/BusinessPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/como-funciona" element={<HowItWorksPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/comunidad" element={<CommunityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/empresas" element={<BusinessPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
