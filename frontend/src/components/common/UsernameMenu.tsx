import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Separator } from "../ui/separator";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2 ">
          <CircleUserRound />
          <>{user?.email}</>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col px-4 py-3  gap-2 ">
          <DropdownMenuItem>
            <Link
              to="/user-profile"
              className="font-bold hover:text-orange-500"
            >
              User Profile
            </Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <Button
              onClick={async () => await logout()}
              className=" w-full font-bold bg-orange-500 "
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UsernameMenu;
