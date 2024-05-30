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

function TodoItem({ todo, deleteTodo }) {
  return (
    <tr>
      <td style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.text}</td>
      <td>{todo.completed ? 'Yes' : 'No'}</td>
      <td>
        <span
          onClick={() => deleteTodo(todo._id)}
          style={{ cursor: 'pointer', color: 'red' }}
        >
          Delete
        </span>
      </td>
    </tr>
  );
}

export default TodoItem;
