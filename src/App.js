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

import NewNodeFormSwitch from "./components/NewNodeFormSwitch";
import ModalWindow from "./components/ModalWindow";

import DialogsContext from "./context/dialogsContext";

import "./App.css";
import "./index.sass";

const App = () => {
  const [dialogsOpen, changeDialogsOpen] = useState({
    rootCategoryAddDialogOpen: false,
    subNodeAddDialogOpen: false,
  });

  const [rootCategoryAddDialogOpen, changeRootCategoryAddDialogOpen] = useState(
    false
  );
  const [subNodeAddDialogOpen, changeSubNodeAddDialogOpen] = useState(false);

  const [nodes, changeNodes] = useState([
    // {
    //   type: "category",
    //   title: "Webdesign",
    //   expanded: true,
    //   children: [
    //     {
    //       type: "category",
    //       title: "CSS",
    //       expanded: false,
    //       children: [],
    //     },
    //   ],
    // },
    // {
    //   type: "category",
    //   title: "Photography",
    // },
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

  // ?????
  const closeInputWindow = () => {
    changeRootCategoryAddDialogOpen(false);
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
    <AuthenticatedContainer>
      <DialogsContext.Provider
        value={{
          dialogsOpen,
          changeDialogsOpen,
        }}
      >
        <AddRootCategoryBtn onClick={openRootCategoryWindow} />
        {/* <div>{nodes.length}</div> */}

        <NodesDisplayContainer
          openNewNodeDialog={openNewNodeWindow}
          nodes={nodes}
        />

        {rootCategoryAddDialogOpen && (
          <ModalWindow>
            <AddRootCategoryFormContainer
              addNewNode={addNewNode}
              closeInputWindow={closeInputWindow}
            />
          </ModalWindow>
        )}

        {subNodeAddDialogOpen && (
          <ModalWindow>
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
  );
};

export default App;
