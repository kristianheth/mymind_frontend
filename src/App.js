import React, { useState, useEffect } from "react";
import axios from "axios";

import AddRootCategoryBtn from "./components/AddRootCategoryBtn";
import AuthenticatedContainer from "./containers/AuthenticatedContainer";
import NodesDisplayContainer from "./containers/NodesDisplayContainer";
import AddRootCategoryFormContainer from "./containers/AddRootCategoryFormContainer";
import AddAttachmentNodeFormContainer from "./containers/AddAttachmentNodeFormContainer";
import AddCategoryNodeFormContainer from "./containers/AddCategoryNodeFormContainer";
import AddUrlLinkNodeFormContainer from "./containers/AddUrlLinkNodeFormContainer";
import AddClipboardFormContainer from "./containers/AddClipboardFormContainer";
import LogOutBtn from "./components/LogOutBtn";

import NewNodeFormSwitch from "./components/NewNodeFormSwitch";
import ModalWindow from "./components/ModalWindow";

import DialogsContext from "./context/dialogsContext";

import "./index.css";

const App = () => {
  const [dialogsOpen, changeDialogsOpen] = useState({
    rootCategoryAddDialogOpen: false,
    subNodeAddDialogOpen: false,
  });

  const [rootCategoryAddDialogOpen, changeRootCategoryAddDialogOpen] = useState(
    false
  );

  const [userLoggedInStatus, changeUserLoggedInStatus] = useState(true);

  const [subNodeAddDialogOpen, changeSubNodeAddDialogOpen] = useState(false);

  const [nodes, changeNodes] = useState([]);

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

  // ?????
  const closeInputWindow = () => {
    changeRootCategoryAddDialogOpen(false);
  };

  const userLoggedIn = () => {
    changeUserLoggedInStatus(false);
  };

  const closeSubNodeAddDialog = () => {
    changeSubNodeAddDialogOpen(false);
  };

  const openRootCategoryWindow = () => {
    changeRootCategoryAddDialogOpen(true);
    changeSubNodeAddDialogOpen(false);
  };

  const openNewNodeWindow = () => {
    changeRootCategoryAddDialogOpen(false);
    changeSubNodeAddDialogOpen(true);
  };

  return (
    <div className="authenticated-container">
      <AuthenticatedContainer>
        <DialogsContext.Provider
          value={{
            dialogsOpen,
            changeDialogsOpen,
          }}
        >
          <AddRootCategoryBtn onClick={openRootCategoryWindow} />
          {/* <div>{nodes.length}</div> */}

          <LogOutBtn />

          <NodesDisplayContainer
            openNewNodeDialog={openNewNodeWindow}
            nodes={nodes}
          />

          {rootCategoryAddDialogOpen && (
            <ModalWindow onCloseClick={closeInputWindow}>
              <AddRootCategoryFormContainer addNewNode={addNewNode} />
            </ModalWindow>
          )}

          {subNodeAddDialogOpen && (
            <ModalWindow onCloseClick={closeSubNodeAddDialog}>
              <NewNodeFormSwitch
                categories={[
                  "Sub Category",
                  "URL link",
                  "Paste clipboard",
                  "Attachment",
                ]}
              >
                <AddCategoryNodeFormContainer
                  addNewNode={addNewNode}
                  closeSubNodeAddDialog={closeSubNodeAddDialog}
                />

                <AddUrlLinkNodeFormContainer
                  addNewNode={addNewNode}
                  closeSubNodeAddDialog={closeSubNodeAddDialog}
                />

                <AddClipboardFormContainer
                  addNewNode={addNewNode}
                  closeSubNodeAddDialog={closeSubNodeAddDialog}
                />

                <AddAttachmentNodeFormContainer
                  addNewNode={addNewNode}
                  closeSubNodeAddDialog={closeSubNodeAddDialog}
                />
              </NewNodeFormSwitch>
            </ModalWindow>
          )}
        </DialogsContext.Provider>
      </AuthenticatedContainer>
    </div>
  );
};

export default App;
