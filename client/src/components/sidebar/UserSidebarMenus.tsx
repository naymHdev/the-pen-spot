import { Link } from "react-router-dom";
import { Cog } from "lucide-react";
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
    </>
  );
};

export default UserSidebarMenus;
