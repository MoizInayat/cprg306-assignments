import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-4 bg-yellow-900 text-white-500 max-w-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;