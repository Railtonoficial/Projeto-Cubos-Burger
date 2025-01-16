import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { CreatePage } from "./CreatePage"; // Importação adicionada
import { makeRequest } from "./utils/makeRequest";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        loader={() => makeRequest('/products', 'GET')}
        element={
          <CreatePage>
            <Home />
          </CreatePage>
        } />
      <Route
        path="/cart"
        loader={() => makeRequest('/cart', 'GET')}
        element={
          <CreatePage>
            <Cart />
          </CreatePage>
        } />
    </Route>
  )
);
