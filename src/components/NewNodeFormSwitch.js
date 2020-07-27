import React, { useState } from "react";
import PropTypes from "prop-types";

const NewNodeFormSwitch = ({categories, children }) => {
  const [ selected ] = useState(0);

  return (
    <div className="new-node-form-switch">
      <div>
        NewNodeFormSwitch
      </div>

      {children[selected]}
    </div>
  );
};

NewNodeFormSwitch.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default NewNodeFormSwitch;
