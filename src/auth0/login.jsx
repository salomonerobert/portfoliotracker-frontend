import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  React.useEffect(() => {
    if (isLoading || isAuthenticated) return;
    else {
      loginWithRedirect();
    }
  });
};
export default Login;
