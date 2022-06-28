import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
