import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { NotFound } from "./pages/NotFound";
import { store } from "./redux/store";
import { Home } from "./pages/Home";
import App from "./App";

const Cart = React.lazy(() => import("./pages/Cart"));
const ItemDetail = React.lazy(() => import("./pages/ItemDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/:id",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <ItemDetail />
          </Suspense>
        ),
      },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
