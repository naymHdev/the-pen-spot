import { Link } from "react-router-dom";
import { LayoutDashboard, FilePlus } from "lucide-react";
import { MenuItem } from "react-pro-sidebar";

const AdminSidebarMenus = () => {
  return (
    <>
      <MenuItem
        component={<Link to="/dashboard/admin-dashboard" />}
        icon={<LayoutDashboard size={20} />}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        component={<Link to="/dashboard/create-product" />}
        icon={<FilePlus size={20} />}
      >
        Add Product
      </MenuItem>
    </>
  );
};

export default AdminSidebarMenus;
