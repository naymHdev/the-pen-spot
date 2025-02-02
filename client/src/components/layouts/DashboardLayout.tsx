import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import { ChevronLeft, ChevronRight, House, LogOut } from "lucide-react";
import AdminSidebarMenus from "../sidebar/AdminSidebarMenus";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import UserSidebarMenus from "../sidebar/UserSidebarMenus";
import Container from "./Container";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  // check user exists
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Container>
        <div className="h-screen flex">
          <Sidebar
            collapsed={collapsed}
            className="h-full text-primary-text rounded-2xl"
            transitionDuration={300}
          >
            <Menu>
              <MenuItem
                icon={
                  collapsed ? (
                    <ChevronRight size={20} />
                  ) : (
                    <ChevronLeft size={20} />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                className="text-center cursor-pointer shadow py-2 custom-menu-item text-primary-text"
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
                <MenuItem
                  component={<Link to="/" />}
                  icon={<House size={20} />}
                >
                  Home
                </MenuItem>
                {user && user.role === "admin" && <AdminSidebarMenus />}
                {user && user.role === "user" && <UserSidebarMenus />}
                <MenuItem
                  className=" text-secondary"
                  onClick={handleLogout}
                  component={<Link to="/" />}
                  icon={<LogOut size={20} />}
                >
                  Sign Out
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className=" p-10 w-full mx-auto h-screen overflow-auto hide-scrollbar">
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardLayout;
