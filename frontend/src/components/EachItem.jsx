// import React from 'react';

// function TodoItem({ todo, deleteTodo }) {
//   return (
//     <p style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
//       {todo.text}
//       <span
//         onClick={() => deleteTodo(todo._id)}
//         style={{ marginLeft: '15px', fontWeight: '500', cursor: 'pointer' }}
//       >
//         X
//       </span>
//     </p>
//   );
// }

// export default TodoItem;

import React from 'react';

function EachItem({ item, deleteItem, refreshItem }) {
  let condition = '';
  switch(item.aspects[0]?.value){
    // <option value="">Not Specified</option>
          case "1000":
            condition = "New";
            break;
          case "3000":
            condition = "Used";
            break;
          case "7000":
            condition = "For parts or not working";
            break;
  }

  return (
    <tr>
      <td>{item.search_name}</td>
      <td>{condition}</td>
      <td>{item.keywords}</td>
      <td style={{ textDecoration: 'line-through', color: 'coral'}}>{item.excluded_keywords}</td>
      <td>{item?.category_id}</td>
      <td>{item.ebayData?.average_price}</td>
      <td>{item.ebayData?.median_price}</td>
      <td>{item.ebayData?.max_price}</td>
      <td>{item.ebayData?.min_price}</td>
      <td>
        <span
          onClick={() => deleteItem(item._id)}
          // style={{ cursor: 'pointer', color: 'red' }}
          id='delete'
        >
          Delete
        </span>
      </td>
      <td>
        <span
          onClick={() => refreshItem(item._id)}
          // style={{ cursor: 'pointer', color: 'olive' }}
          id='refresh'
        >
          Refresh
        </span>
      </td>
    </tr>
  );
}

export default EachItem;
