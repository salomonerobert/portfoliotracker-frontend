import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn btn-outline-primary" 
  onClick={() => loginWithRedirect()}><h5>Log In</h5></button>;
};

export default LoginButton;