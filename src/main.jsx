import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardPage from "./components/card/CardPage.jsx";
import ContentLayout from "./components/layout/ContentLayout.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import FavoritesPage from "./components/pages/FavoritesPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DataContextProvider from "./context/DataContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <ContentLayout /> },
      {
        path: "/:cardId",
        element: <CardPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataContextProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </DataContextProvider>
  </StrictMode>
);
