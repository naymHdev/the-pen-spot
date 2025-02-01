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
import BestSell from "@/pages/bestSell/BestSell";
import Cart from "@/pages/cart/Cart";
import ProtectedRoute from "./ProtectedRoute";

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
        path: "/best-sell",
        element: <BestSell />,
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
