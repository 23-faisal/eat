import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLink = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-2 ">
      <Link to="/user-profile" className="font-bold text-lg text-orange-500">
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="font-bold text-lg bg-orange-500"
      >
        Logout
      </Button>
    </div>
  );
};

export default MobileNavLink;
