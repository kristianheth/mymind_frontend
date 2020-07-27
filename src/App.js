import React, { useState } from "react";

import AddRootCategoryBtn from "./components/AddRootCategoryBtn";
import AuthenticatedContainer from "./containers/AuthenticatedContainer";
import NodesDisplayContainer from "./containers/NodesDisplayContainer";
import AddRootCategoryFormContainer from "./containers/AddRootCategoryFormContainer";
import AddAttachmentNodeFormContainer from "./containers/AddAttachmentNodeFormContainer";
import AddCategoryNodeFormContainer from "./containers/AddCategoryNodeFormContainer";
import AddUrlLinkNodeFormContainer from "./containers/AddUrlLinkNodeFormContainer";

import NewNodeFormSwitch from "./components/NewNodeFormSwitch";

import DialogsContext from "./context/dialogsContext";

import "./App.css";

const App = () => {
  const [dialogsOpen, changeDialogsOpen] = useState({
    rootCategoryAddDialogOpen: false,
    subNodeAddDialogOpen: false,
  });

  const openNewNodeDialog = () => {
    changeDialogsOpen({
      ...dialogsOpen,
      subNodeAddDialogOpen: false,
    });
  };

  return (
    <AuthenticatedContainer>
      <DialogsContext.Provider
        value={{
          dialogsOpen,
          changeDialogsOpen,
        }}
      >
        <AddRootCategoryBtn />

        <NodesDisplayContainer openNewNodeDialog={openNewNodeDialog} />

        {dialogsOpen.rootCategoryAddDialogOpen && (
          <AddRootCategoryFormContainer />
        )}

        {dialogsOpen.subNodeAddDialogOpen && (
          <NewNodeFormSwitch
            categories={["Category", "URL link", "Attachment"]}
          >
            <AddCategoryNodeFormContainer />
            <AddUrlLinkNodeFormContainer />
            <AddAttachmentNodeFormContainer />
          </NewNodeFormSwitch>
        )}
      </DialogsContext.Provider>
    </AuthenticatedContainer>
  );
};

export default App;
