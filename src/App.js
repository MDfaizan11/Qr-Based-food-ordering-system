import MenuPage from "./comonent/MenuPage";
import Cart from "./comonent/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./comonent/Dashboard";
import Home from "./comonent/Home";
import Newdish from "./pages/Newdish";
import Product from "./pages/Product";
import AdminDash from "./pages/AdminDash";
import UserOrder from "./pages/UserOrder";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<AdminDash />} />
            <Route path="new" element={<Newdish />} />
            <Route path="product" element={<Product />} />
            <Route path="order" element={<UserOrder />} />
            <Route path="product/EditProduct/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
