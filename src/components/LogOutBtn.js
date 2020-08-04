import React from "react";

import "./LogOutBtn.css";

const LogOutBtn = (props) => {
  const logoutFn = () => {
    localStorage.removeItem("token", "user");
    {
      props.userLoggedIn(false);
    }
  };

  return (
    <div>
      <button className="logout-btn" onClick={logoutFn}>
        Logout
      </button>
    </div>
  );
};

export default LogOutBtn;
