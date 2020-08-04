import React from "react";

import "./LogOutBtn.css";

const LogOutBtn = () => {
  const logoutFn = () => {};
  return (
    <div>
      <button className="logout-btn" onClick={logoutFn}>
        Logout
      </button>
    </div>
  );
};

export default LogOutBtn;
