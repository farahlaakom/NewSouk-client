import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import SellerDashboard from "./pages/SellerDashboard";
import LiveRoom from "./pages/LiveRoom";
import Discover from "./pages/Discover";
import GoogleSuccess from "./pages/GoogleSuccess";
import BecomeSeller from "./pages/BecomeSeller";
import ViewerLive from "./pages/ViewerLive";
import Checkout from "./pages/Checkout";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route
          path="/live-room/:productId"
          element={<LiveRoom />}
        />
        <Route
  path="/discover"
  element={<Discover />}
/>
<Route
  path="/google-success"
  element={<GoogleSuccess />}
/>
<Route
  path="/become-seller"
  element={<BecomeSeller />}
/>
<Route
  path="/watch-live/:productId"
  element={<ViewerLive />}
/>
<Route
  path="/checkout/:productId"
  element={<Checkout />}
/>
      </Routes>
    </>
  );
}