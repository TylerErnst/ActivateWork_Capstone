import React from 'react';

function TodoItem({ todo, deleteTodo }) {
  return (
    <p style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <span
        onClick={() => deleteTodo(todo._id)}
        style={{ marginLeft: '15px', fontWeight: '500', cursor: 'pointer' }}
      >
        X
      </span>
    </p>
  );
}

export default TodoItem;
