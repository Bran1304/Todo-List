import React from 'react';
import PropTypes from 'prop-types';
import RemoveItemBtn from '../removeItemBtn/removeItemBtn';

const Item = ({
  title,
  removeItem,
  id,
  onTitleChange,
}) => {
  return (
    <div className="item clearfix">
      <div className="title">
        <input defaultValue={title} onChange={e => onTitleChange(e, id)} />
      </div>
      <RemoveItemBtn removeItem={() => removeItem(id)} />
    </div>
  )
}

export default Item;

Item.defaultProps = {}
Item.propTypes = {
  title: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}
