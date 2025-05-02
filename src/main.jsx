import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardPage from "./components/card/CardPage.jsx";
import ContentLayout from "./components/layout/ContentLayout.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ContentLayout /> },
      {
        path: "/:cardId",
        element: <CardPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
