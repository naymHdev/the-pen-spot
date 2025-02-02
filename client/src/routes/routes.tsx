import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AllProducts from "@/pages/allProducts/AllProducts";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import CreateProduct from "@/pages/admin/CreateProduct";
import ProductDetails from "@/pages/allProducts/ProductDetails";
import Cart from "@/pages/cart/Cart";
import ProtectedRoute from "./ProtectedRoute";
import About from "@/pages/about/About";
import MyProfile from "@/pages/profile/MyProfile";
import UpdateProfile from "@/pages/profile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/product-details/:name/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute role="user">
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute role="user">
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <ProtectedRoute role="user">
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
