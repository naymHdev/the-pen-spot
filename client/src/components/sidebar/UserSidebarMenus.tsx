import { Link } from "react-router-dom";
import { Cog, UserCog } from "lucide-react";
import { MenuItem } from "react-pro-sidebar";

const UserSidebarMenus = () => {
  return (
    <>
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
