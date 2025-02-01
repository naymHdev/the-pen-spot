import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Outlet } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AdminSidebarMenus from "../sidebar/AdminSidebarMenus";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import UserSidebarMenus from "../sidebar/UserSidebarMenus";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const token = useAppSelector(useCurrentToken);

  // check user exists
  let user;
  if (token) {
    user = verifyToken(token);
  }

  return (
    <div className="h-screen flex">
      <Sidebar
        collapsed={collapsed}
        className="h-full bg-primary-bg text-primary-text"
        transitionDuration={300}
      >
        <Menu>
          <MenuItem
            icon={
              collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />
            }
            onClick={() => setCollapsed(!collapsed)}
            className="text-center cursor-pointer bg-secondary text-white shadow-md custom-menu-item hover:text-primary-text"
          >
            {collapsed ? (
              ""
            ) : (
              <>
                <p className=" text-lg font-semibold">The Pen Spot</p>
              </>
            )}
          </MenuItem>

          <div className="mt-6">
            {user && user.role === "admin" && <AdminSidebarMenus />}
            {user && user.role === "user" && <UserSidebarMenus />}
          </div>
        </Menu>
      </Sidebar>
      <div className=" p-10 w-full mx-auto h-screen overflow-auto hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
