import { Link } from "react-router-dom";
import { LayoutDashboard, House, FilePlus } from "lucide-react";
import { MenuItem } from "react-pro-sidebar";

const AdminSidebarMenus = () => {
  return (
    <>
      {" "}
      <MenuItem icon={<House size={20} />}>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem icon={<LayoutDashboard size={20} />}>
        <Link to="/dashboard/admin-dashboard">Dashboard</Link>
      </MenuItem>
      <MenuItem icon={<FilePlus size={20} />}>
        <Link to="/dashboard/create-product">Add Product</Link>
      </MenuItem>
    </>
  );
};

export default AdminSidebarMenus;
