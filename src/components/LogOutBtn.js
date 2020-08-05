import React, { useContext } from "react";

import UserContext from '../context/userContext';

import "./LogOutBtn.css";

const LogOutBtn = (props) => {
  const { logOff } = useContext(UserContext);

  return (
    <div>
      <button className="logout-btn" onClick={logOff}>
        Logout
      </button>
    </div>
  );
};

export default LogOutBtn;
