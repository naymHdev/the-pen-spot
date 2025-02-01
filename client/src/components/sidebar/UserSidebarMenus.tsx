import { Link } from "react-router-dom";
import { UserRoundCog, House } from "lucide-react";
import { MenuItem } from "react-pro-sidebar";

const UserSidebarMenus = () => {
  return (
    <>
      <MenuItem component={<Link to="/" />} icon={<House size={20} />}>
        Home
      </MenuItem>
      <MenuItem
        component={<Link to="/dashboard/profile" />}
        icon={<UserRoundCog size={20} />}
      >
        Profile
      </MenuItem>
    </>
  );
};

export default UserSidebarMenus;
