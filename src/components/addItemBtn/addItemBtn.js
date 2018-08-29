import React from 'react';
import PropTypes from 'prop-types';

const AddItemBtn = ({
  addItem,
}) => {
  return (
    <button type="button" className="addBtn" onClick={addItem}>Add a Todo task</button>
  )
}

export default AddItemBtn;

AddItemBtn.defaultProps = {}
AddItemBtn.propTypes = {
  addItem: PropTypes.func.isRequired,
}
