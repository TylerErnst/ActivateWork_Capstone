import React from 'react';
import EachItem from './EachItem';

function ItemList({ items, deleteItem }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Average Price</th>
          <th>Median Price</th>
          <th>Max Price</th>
          <th>Min Price</th>
          <th>Delete?</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <EachItem key={item._id} item={item} deleteItem={deleteItem} />
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
