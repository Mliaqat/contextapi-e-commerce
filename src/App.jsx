import { useState } from "react";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { ShoppingCart } from "./store/Shopping-Cart-Context.jsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Shop />
    </ShoppingCartProvider>
  );
}

export default App;
