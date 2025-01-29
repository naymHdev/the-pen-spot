import { LayoutDashboard, LogOut, Package, UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetMeQuery } from "@/redux/features/auth/authApi";

const UserAvatar = ({ handleLogout, user }) => {
  const { data: myInfo } = useGetMeQuery(undefined);

  const name = myInfo?.data?.name;

  let initials: string;
  if (name) {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0].charAt(0);
    const lastInitial = nameParts[nameParts.length - 1].charAt(0);
    initials = `${firstInitial}${lastInitial}`;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border-none">
          <Avatar className=" border border-primary-text">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" bg-primary-bg border-primary-text px-2">
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" text-primary-text font-medium flex items-center gap-2 w-full">
            <UserRound /> My Profile
          </DropdownMenuItem>
          {user?.role === "user" && (
            <>
              <DropdownMenuItem className=" text-primary-text font-medium flex items-center gap-2 w-full">
                <Package /> Orders
              </DropdownMenuItem>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <DropdownMenuItem className=" text-primary-text font-medium flex items-center gap-2 w-full">
                <LayoutDashboard /> Dashboard
              </DropdownMenuItem>
            </>
          )}
          <div className=" border w-full opacity-10 my-2" />
          <DropdownMenuItem
            onClick={handleLogout}
            className=" text-primary-text font-medium flex items-center gap-2 w-full"
          >
            <LogOut /> Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserAvatar;
