import React, { useState, useEffect } from "react";
import axios from "axios";

import AddRootCategoryBtn from "./components/AddRootCategoryBtn";
import AuthenticatedContainer from "./containers/AuthenticatedContainer";
import NodesDisplayContainer from "./containers/NodesDisplayContainer";
import AddRootCategoryFormContainer from "./containers/AddRootCategoryFormContainer";
import AddAttachmentNodeFormContainer from "./containers/AddAttachmentNodeFormContainer";
import AddCategoryNodeFormContainer from "./containers/AddCategoryNodeFormContainer";
import AddUrlLinkNodeFormContainer from "./containers/AddUrlLinkNodeFormContainer";

import NewNodeFormSwitch from "./components/NewNodeFormSwitch";
import ModalWindow from "./components/ModalWindow";

import DialogsContext from "./context/dialogsContext";

import "./App.css";
import "./index.sass";

const App = () => {
  const [dialogsOpen, changeDialogsOpen] = useState({
    rootCategoryAddDialogOpen: false,
    subNodeAddDialogOpen: true,
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

  useEffect(() => {
    axios
      .get("https://mymind-backend.herokuapp.com/nodes?parent_null=true")
      .then((response) => {
        console.log(response);
        changeNodes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        {/* <div>{nodes.length}</div> */}

        <NodesDisplayContainer
          openNewNodeDialog={openNewNodeDialog}
          nodes={nodes}
        />

        {dialogsOpen.rootCategoryAddDialogOpen && (
          <ModalWindow>
            <AddRootCategoryFormContainer addNewNode={addNewNode} />
          </ModalWindow>
        )}

        {dialogsOpen.subNodeAddDialogOpen && (
          <ModalWindow>
            <NewNodeFormSwitch
              categories={["Category", "URL link", "Attachment"]}
            >
              <AddCategoryNodeFormContainer />
              <AddUrlLinkNodeFormContainer />
              <AddAttachmentNodeFormContainer />
            </NewNodeFormSwitch>
          </ModalWindow>
        )}
      </DialogsContext.Provider>
    </AuthenticatedContainer>
  );
};

export default App;
