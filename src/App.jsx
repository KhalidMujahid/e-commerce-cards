import { Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductProvider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ProductProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
