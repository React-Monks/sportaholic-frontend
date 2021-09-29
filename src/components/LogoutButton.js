import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Logout.scss'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div id="LogoutBTN">
    <button   className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
  <a class="effect1" href="#">
    Log out
    <span class="bg"></span>
  </a>
    </button>
</div>
  );
};

export default LogoutButton;