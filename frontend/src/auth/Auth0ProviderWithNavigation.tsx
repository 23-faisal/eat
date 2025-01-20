import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyuserAPI";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigation = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN as string;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI as string;

  const { createUser } = useCreateMyUser();

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to inititate auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("User", user);
    if (user?.sub && user?.email) {
      createUser({ auth0Id: user?.sub, email: user.email });
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigation;
