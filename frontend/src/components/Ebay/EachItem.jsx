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

function EachItem({ item, deleteItem, refreshItem, toggleChecked }) {
  const handleCheckboxChange = (e) => {
    toggleChecked(item._id, e.target.checked);
  }

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
      <td className='num'>{item.ebayData?.average_price?.toFixed(2)}</td>
      <td className='num'>{item.ebayData?.median_price?.toFixed(2)}</td>
      <td className='num'>{item.ebayData?.max_price?.toFixed(2)}</td>
      <td className='num'>{item.ebayData?.min_price?.toFixed(2)}</td>
      <td>
        <span
          onClick={() => deleteItem(item._id)}
          // style={{ cursor: 'pointer', color: 'red' }}
          className='delete'
        >
          Delete
        </span>
      </td>
      <td>
        <span
          onClick={() => refreshItem(item._id)}
          // style={{ cursor: 'pointer', color: 'olive' }}
          className='refresh'
        >
          Refresh
        </span>
      </td>
      <td>
        <input
          type="checkbox"
          checked={item.checked || false}
          onChange={handleCheckboxChange}
        />
      </td>
    </tr>
  );
}

export default EachItem;
