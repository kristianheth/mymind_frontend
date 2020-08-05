import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import AddRootCategoryBtn from "./components/AddRootCategoryBtn";

import NodesDisplayContainer from "./containers/NodesDisplayContainer";
import AddRootCategoryFormContainer from "./containers/AddRootCategoryFormContainer";
import AddCategoryNodeFormContainer from "./containers/AddCategoryNodeFormContainer";
import AddUrlLinkNodeFormContainer from "./containers/AddUrlLinkNodeFormContainer";
import LogOutBtn from "./components/LogOutBtn";

import NewNodeFormSwitch from "./components/NewNodeFormSwitch";
import ModalWindow from "./components/ModalWindow";

import DialogsContext from "./context/dialogsContext";
import UserContext from "./context/userContext";

import "./index.css";

const App = () => {
  const [requestStatus, updateRequestStatus] = useState("IDLE");
  const [errorMessage, updateErrorMessage] = useState();
  const [parentIdForSubNode, updateParentIdForSubNode] = useState();

  const { user } = useContext(UserContext);

  const [dialogsOpen, changeDialogsOpen] = useState({
    rootCategoryAddDialogOpen: false,
    subNodeAddDialogOpen: false,
  });

  const [rootCategoryAddDialogOpen, changeRootCategoryAddDialogOpen] = useState(
    false
  );

  const [subNodeAddDialogOpen, changeSubNodeAddDialogOpen] = useState(false);

  const [nodes, changeNodes] = useState([]);

  const fetchNodes = () => {
    updateRequestStatus("STARTED");

    axios
      .get("https://mymind-backend.herokuapp.com/nodes?parent_null=true", {
        // .get(`${process.env.REACT_APP_BACKEND_URL}/nodes?parent_null=true`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        changeNodes(response.data);
        updateRequestStatus("SUCCESS");
      })

      .catch((error) => {
        const { data } = error.response.data;

        const errMessage = data
          .map(({ messages }) => {
            const messagesAsLines = messages
              .map(({ message }) => message)
              .join("\n");
            return messagesAsLines;
          })
          .join("");

        updateErrorMessage(errMessage);
        updateRequestStatus("FAILED");
      });
  };

  useEffect(() => {
    fetchNodes();
  }, []); // eslint-disable-line

  // eg used here: AddRootCategoryFormContainer
  const addNewNode = (node) => {
    changeNodes([...nodes, node]);
  };

  const closeInputWindow = () => {
    fetchNodes();
    changeRootCategoryAddDialogOpen(false);
  };

  const closeSubNodeAddDialog = () => {
    fetchNodes();
    updateParentIdForSubNode();
    changeSubNodeAddDialogOpen(false);
  };

  const openRootCategoryWindow = () => {
    changeRootCategoryAddDialogOpen(true);
    changeSubNodeAddDialogOpen(false);
  };

  const openNewNodeWindow = (currentParentId) => {
    changeRootCategoryAddDialogOpen(false);
    updateParentIdForSubNode(currentParentId);
    changeSubNodeAddDialogOpen(true);
  };

  return (
    <div className="App">
      <DialogsContext.Provider
        value={{
          dialogsOpen,
          changeDialogsOpen,
        }}
      >
        <AddRootCategoryBtn onClick={openRootCategoryWindow} />

        <LogOutBtn />

        {(requestStatus === "STARTED" || requestStatus === "IDLE") && (
          <div className="loading">Loading...</div>
        )}

        {requestStatus === "SUCCESS" && (
          <NodesDisplayContainer
            openNewNodeDialog={openNewNodeWindow}
            nodes={nodes}
            fetchNodes={fetchNodes}
          />
        )}

        {requestStatus === "FAILED" && (
          <div className="error_message">{errorMessage}</div>
        )}

        {rootCategoryAddDialogOpen && (
          <ModalWindow onCloseClick={closeInputWindow}>
            <AddRootCategoryFormContainer
              addNewNode={addNewNode}
              closeInputWindow={closeInputWindow}
            />
          </ModalWindow>
        )}

        {subNodeAddDialogOpen && (
          <ModalWindow onCloseClick={closeSubNodeAddDialog}>
            <NewNodeFormSwitch
              categories={[
                "Sub Category",
                "URL link",
                // "Paste clipboard",
                // "Attachment",
              ]}
            >
              <AddCategoryNodeFormContainer
                addNewNode={addNewNode}
                closeSubNodeAddDialog={closeSubNodeAddDialog}
                parentId={parentIdForSubNode}
              />

              <AddUrlLinkNodeFormContainer
                addNewNode={addNewNode}
                closeSubNodeAddDialog={closeSubNodeAddDialog}
                parentId={parentIdForSubNode}
              />

              {/* <AddClipboardFormContainer
                addNewNode={addNewNode}
                closeSubNodeAddDialog={closeSubNodeAddDialog}
                parentId={parentIdForSubNode}
              /> */}

              {/* <AddAttachmentNodeFormContainer
                addNewNode={addNewNode}
                closeSubNodeAddDialog={closeSubNodeAddDialog}
                parentId={parentIdForSubNode}
              /> */}
            </NewNodeFormSwitch>
          </ModalWindow>
        )}
      </DialogsContext.Provider>
    </div>
  );
};

export default App;
