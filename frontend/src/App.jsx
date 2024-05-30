import { useState, useRef, useEffect } from 'react'

import './App.css'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const BASE_URL = import.meta.env.DEV ? 
'http://localhost:8080/api/todos' : 
'' // Deploy Link



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        setTodos(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getTodos();
  }, []);

  const addTodo = async (body) => {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm addTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todos={todos} deleteTodo={deleteTodo} />}
    </div>
  );
}

export default App;