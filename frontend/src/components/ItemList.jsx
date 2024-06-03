import React from 'react';
import EachItem from './EachItem';

function ItemList({ items, deleteItem, refreshItem }) {
  // console.log(items.map(item => item._id));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Condition</th>
          <th>Keywords</th>
          <th>Excluded Keywords</th>
          <th>Category ID</th>
          <th>Average Price</th>
          <th>Median Price</th>
          <th>Max Price</th>
          <th>Min Price</th>
          <th>Delete?</th>
          <th>Refresh?</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <EachItem key={item._id} item={item} deleteItem={deleteItem} refreshItem={refreshItem} />
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
