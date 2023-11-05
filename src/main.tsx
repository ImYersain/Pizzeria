import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./utils/i18n";

import { NotFound } from "./pages/NotFound";
import { store } from "./redux/store";
import HomeContainer from "./pages/HomePage/HomeContainer";
import App from "./App";

const CartContainer = React.lazy(
  () => import("./pages/CartPage/CartContainer")
);
const ItemDetailContainer = React.lazy(
  () => import("./pages/ItemDetailPage/ItemDetailContainer")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <CartContainer />
          </Suspense>
        ),
      },
      {
        path: "/:id",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <ItemDetailContainer />
          </Suspense>
        ),
      },
      {
        path: "/*",
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
