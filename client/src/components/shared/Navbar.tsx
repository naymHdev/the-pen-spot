import { Button } from "../ui/button";
import { Input } from "../ui/input";
import logo from "../../../public/assets/images/logo.svg";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const Navbar = () => {
  const token = useAppSelector(useCurrentToken);
  const cartData = useAppSelector((state) => state.cart);

  const { data: myInfo } = useGetMeQuery(undefined);
  const name = myInfo?.data?.name;

  let initials: string = "";
  if (name) {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0].charAt(0);
    const lastInitial = nameParts[nameParts.length - 1].charAt(0);
    initials = `${firstInitial}${lastInitial}`;
  }

  // check user exists
  let user;
  if (token) {
    user = verifyToken(token);
  }

  // Dynamic dashboard link handle
  const dashboardLink =
    user?.role === "admin"
      ? "/dashboard/admin-dashboard"
      : user?.role === "user"
      ? "/dashboard/profile"
      : "/";

  return (
    <>
      <div className=" bg-primary-bg relative">
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
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link to={dashboardLink || "/"}>
                              <Avatar className="border border-primary-text">
                                <AvatarFallback>{initials}</AvatarFallback>
                              </Avatar>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent className=" border-neutral-300">
                            <p>
                              {user?.role === "admin"
                                ? "Admin Dashboard"
                                : "My Profile"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                  <div
                    className=" hover:cursor-pointer"
                    onClick={() => toast.warning("Its page underconstraction!")}
                  >
                    <Heart size={30} />
                  </div>
                  <div className="relative">
                    <Link to="/cart">
                      <ShoppingCart size={30} />
                    </Link>
                    {cartData.items.length > 0 && (
                      <div className="absolute -top-2 -right-2 flex items-center justify-center text-sm font-medium bg-primary-bg border rounded-full w-5 h-5">
                        {cartData.items.length}
                      </div>
                    )}
                  </div>
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
