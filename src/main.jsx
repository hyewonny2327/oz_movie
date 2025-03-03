import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail.jsx';
import Layout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />}></Route>
          <Route path="/details/:id" element={<MovieDetail />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
