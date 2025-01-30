import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Menubar from "../shared/Menubar";
import MobileNavbar from "../shared/MobileNavbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Menubar />
      <MobileNavbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
