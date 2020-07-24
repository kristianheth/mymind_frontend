import React from 'react';
import PropTypes from 'prop-types';

const AddAttachmentNodeForm = () => {
    return (
        <div className="add-attachment-node-form">
            AddAttachmentNodeForm
        </div>
    );
};

AddAttachmentNodeForm.propTypes = {
    newNodeFile: PropTypes.string,
    onAttachFileTap: PropTypes.func,
    onUploadTap: PropTypes.func,
};

export default AddAttachmentNodeForm;