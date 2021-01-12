import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lavender",
        height: "25vh",
      }}
    >
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogoutButton;
