import { Link } from "react-router-dom";
import { Cog, ShoppingCart, UserCog } from "lucide-react";
import { MenuItem } from "react-pro-sidebar";

const UserSidebarMenus = () => {
  return (
    <>
      <MenuItem
        component={<Link to="/dashboard/order-details" />}
        icon={<ShoppingCart size={20} />}
      >
        Recent Orders
      </MenuItem>
      {/* <MenuItem
        component={<Link to="/dashboard/order-verify" />}
        icon={<Folders size={20} />}
      >
        Verify Orders
      </MenuItem> */}
      <MenuItem
        component={<Link to="/dashboard/profile" />}
        icon={<Cog size={20} />}
      >
        Profile
      </MenuItem>
      <MenuItem
        component={<Link to="/dashboard/update-profile" />}
        icon={<UserCog size={20} />}
      >
        Update Profile
      </MenuItem>
    </>
  );
};

export default UserSidebarMenus;
