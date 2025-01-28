import { Button } from "../ui/button";
import { Input } from "../ui/input";
import logo from "../../assets/images/logo.svg";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);

  // check user exists
  let user;
  if (token) {
    user = verifyToken(token);
  }
  // console.log("user", user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className=" bg-primary-bg">
        <div className=" container mx-auto ">
          <div className=" py-6 hidden lg:grid grid-cols-5 items-center justify-between">
            <div className=" col-span-1">
              <img src={logo} alt="The Pen Spot Logo" />
            </div>
            <div className="col-span-3">
              <div className="relative w-full">
                <Input
                  className="w-full bg-white rounded-full pl-4 pr-10 border-none"
                  type="search"
                  placeholder="Search"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground" />
              </div>
            </div>
            <div className=" col-span-1">
              <div className=" flex items-center justify-around">
                <div className="flex items-center gap-2">
                  {user ? (
                    <>
                      <Button
                        onClick={handleLogout}
                        className="text-primary-text hover:text-secondary font-medium uppercase"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button className="text-primary-text hover:text-secondary font-medium uppercase">
                          LOGIN / Register
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
                <div className=" flex items-center justify-center space-x-5">
                  <Heart />
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
