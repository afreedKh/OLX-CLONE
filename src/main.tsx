import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/Auth.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/LoginModal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
