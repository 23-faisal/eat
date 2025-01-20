import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLink from "./MobileNavLink";

const MobileNav = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span>Welcome {user?.email}</span>
            ) : (
              <span>Welcome to eats.com</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col ">
            {isAuthenticated ? (
              <MobileNavLink />
            ) : (
              <Button
                onClick={async () => await loginWithRedirect()}
                className="flex-1 font-bold bg-orange-500"
              >
                Login
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
