import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail.jsx';
import Layout from './pages/Layout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { SupabaseProvider } from './supabase/index.js';
import SignupPage from './pages/SignupPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SupabaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />}></Route>
            <Route path="/details/:id" element={<MovieDetail />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </SupabaseProvider>
  </StrictMode>
);
