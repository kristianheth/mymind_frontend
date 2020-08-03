import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewNodeFormSwitch.css";

const NewNodeFormSwitch = ({ categories, children }) => {
  const [selected, changeSelected] = useState(0);

  const onRadioClickHandler = (event) => {
    changeSelected(parseInt(event.target.value));
  };

  return (
    <div className="new-node-form-switch">
      <div id="new-node-header">Add new node</div>
      <div className="new-node-header">
        {categories.map((category, index) => {
          return (
            <label key={category}>
              <input
                value={index}
                onClick={onRadioClickHandler}
                name="type"
                type="radio"
                checked={selected === index}
              />
              {category}
            </label>
          );
        })}

        {children[selected]}
      </div>
    </div>
  );
};

NewNodeFormSwitch.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default NewNodeFormSwitch;
