import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SupabaseProvider } from "./supabase/index.js";
import { UserProvider } from "./hooks/useProvider.jsx";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SupabaseProvider>
      <UserProvider>
        <AppRouter></AppRouter>
      </UserProvider>
    </SupabaseProvider>
  </StrictMode>
);
