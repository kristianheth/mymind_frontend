import React, { useState, useContext } from "react";
import axios from "axios";
import AddUrlLinkNodeForm from "../components/AddUrlLinkNodeForm";
import UserContext from "../context/userContext";

const AddUrlLinkNodeFormContainer = (props) => {
  const [newLinkTitle, changeNewLinkTitle] = useState();
  const [newLinkUrl, changeNewLinkUrl] = useState();

  const [requestStatus, updateRequestStatus] = useState("IDLE");
  const { user } = useContext(UserContext);

  const newNodeLinkTitleChangeHandler = (event) => {
    changeNewLinkTitle(event.target.value);
  };

  const newNodeLinkUrlChangeHandler = (event) => {
    changeNewLinkUrl(event.target.value);
  };

  const createLinkNode = () => {
    updateRequestStatus("STARTED");
    // props.addNewNode({ type: "url link", title: newLinkTitle });
    // Request API.
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/nodes`,
        {
          Type: "Link",
          LinkName: newLinkTitle,
          LinkUrl: newLinkUrl,
          parent: props.parentId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(() => {
        updateRequestStatus("SUCCESS");
        props.closeSubNodeAddDialog();
      })
      .catch((error) => {
        console.warn("ERR:", error);
        updateRequestStatus("FAILED");
      });
  };

  return (
    <AddUrlLinkNodeForm
      newNodeLinkTitle={newLinkTitle}
      newNodeLinkTitleChangeHandler={newNodeLinkTitleChangeHandler}
      newNodeLinkUrl={newLinkUrl}
      newNodeLinkUrlChangeHandler={newNodeLinkUrlChangeHandler}
      onAddTap={createLinkNode}
    />
  );
};

export default AddUrlLinkNodeFormContainer;
