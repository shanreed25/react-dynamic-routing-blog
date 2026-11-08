import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PostsProvider from "./context/PostsProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
     </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
