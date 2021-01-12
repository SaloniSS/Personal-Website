import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lavender",
        height: "100vh",
      }}
    >
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </div>
  );
};

export default LoginButton;
