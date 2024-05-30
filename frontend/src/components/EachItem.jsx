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

function EachItem({ item, deleteItem }) {
  return (
    <tr>
      <td style={{ textDecoration: item.completed ? 'line-through' : '' }}>{item.text}</td>
      <td>{item.completed ? 'Yes' : 'No'}</td>
      <td>
        <span
          onClick={() => deleteItem(item._id)}
          style={{ cursor: 'pointer', color: 'red' }}
        >
          Delete
        </span>
      </td>
    </tr>
  );
}

export default EachItem;
