import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Menubar from "../shared/Menubar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Menubar />
      <Outlet />
    </>
  );
};

export default MainLayout;
