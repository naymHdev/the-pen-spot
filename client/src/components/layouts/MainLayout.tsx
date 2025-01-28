import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Menubar from "../shared/Menubar";
import MobileNavbar from "../shared/MobileNavbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Menubar />
      <MobileNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
