import { Routes, Route } from "react-router-dom"
import Cart from "../Pages/Cart"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Product from "../Pages/Products"

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

    </Routes>
)

}

export default AllRoutes