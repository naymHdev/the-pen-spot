import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus,
  UserRoundPen,
  SendToBack,
  FolderKanban,
} from "lucide-react";
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
        component={<Link to="/dashboard/manage-users" />}
        icon={<UserRoundPen size={20} />}
      >
        Manage Users
      </MenuItem>
      <MenuItem
        component={<Link to="/dashboard/manage-orders" />}
        icon={<SendToBack size={20} />}
      >
        Manage Orders
      </MenuItem>
      <MenuItem
        component={<Link to="/dashboard/create-product" />}
        icon={<FilePlus size={20} />}
      >
        Add Product
      </MenuItem>
      <MenuItem
        component={<Link to="/dashboard/manage-products" />}
        icon={<FolderKanban size={20} />}
      >
        Manage Products
      </MenuItem>
    </>
  );
};

export default AdminSidebarMenus;
