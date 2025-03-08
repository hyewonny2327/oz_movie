import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SupabaseProvider } from './supabase/index.js';
import { UserProvider } from './providers/userProvider.jsx';
import './index.css';
import AppRouter from './routes/AppRouter.jsx';
import Providers from './providers/Providers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <AppRouter></AppRouter>
    </Providers>
  </StrictMode>
);
