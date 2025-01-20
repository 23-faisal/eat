import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import Auth0ProviderWithNavigation from "./auth/Auth0ProviderWithNavigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigation>
        <AppRoutes />
      </Auth0ProviderWithNavigation>
    </Router>
  </StrictMode>
);
