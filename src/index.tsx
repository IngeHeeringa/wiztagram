import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import PhotosContextProvider from "./store/contexts/PhotosContextProvider";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PhotosContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </PhotosContextProvider>
  </React.StrictMode>
);
