import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Completed</th>
          <th>Delete?</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
