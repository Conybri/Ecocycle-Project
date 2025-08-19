import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import App from './App.jsx';
import ScrollRestoration from './components/ScrollRestoration';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ScrollRestoration />
        <App />
      </AuthProvider>
    </Router>
  </StrictMode>
);