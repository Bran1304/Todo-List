import React from 'react';
import PropTypes from 'prop-types';

const removeItemBtn = ({
  removeItem,
}) => {
  return (
    <button type="button" className="removeBtn" onClick={removeItem} />
  )
}

export default removeItemBtn;

removeItemBtn.defaultProps = {}
removeItemBtn.propTypes = {
  removeItem: PropTypes.func.isRequired,
}
