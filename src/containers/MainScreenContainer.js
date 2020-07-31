import React from "react";
import AddRootCategoryBtn from "./AddRootCategoryBtn";
import NodesDisplay from "../components/NodesDisplay";

const MainScreenContainer = () => {
  return (
    <div className="main-screen-container">
      <AddRootCategoryBtn />
      <NodesDisplay />
    </div>
  );
};

export default MainScreenContainer;
