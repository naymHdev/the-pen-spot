import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Navigation Items - Hidden on Mobile */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button className=" border">Login</Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Menu size={28} className="text-gray-700" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
