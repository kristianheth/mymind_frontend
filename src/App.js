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
import "./index.sass";

const App = () => {
  const [dialogsOpen, changeDialogsOpen] = useState({
    rootCategoryAddDialogOpen: false,
    subNodeAddDialogOpen: false,
  });

  const [nodes, changeNodes] = useState([
    {
      type: "category",
      title: "Webdesign",
      expanded: true,
      children: [
        {
          type: "category",
          title: "CSS",
          expanded: false,
          children: [],
        },
      ],
    },
    {
      type: "category",
      title: "Photography",
    },
  ]);

  // eg used here: AddRootCategoryFormContainer
  const addNewNode = (node) => {
    changeNodes([...nodes, node]);
  };

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
        <div>{nodes.length}</div>

        <NodesDisplayContainer
          openNewNodeDialog={openNewNodeDialog}
          nodes={nodes}
        />

        {dialogsOpen.rootCategoryAddDialogOpen && (
          <AddRootCategoryFormContainer addNewNode={addNewNode} />
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
