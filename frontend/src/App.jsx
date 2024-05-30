import { useState, useRef, useEffect } from 'react'

import './App.css'

import SearchForm from './components/SearchForm';
import ItemList from './components/ItemList';

const BASE_URL = import.meta.env.DEV ? 
'http://localhost:8080/api/todos' : 
'' // Deploy Link



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getItems();
  }, []);

  const addItem = async (body) => {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newItem = await response.json();
      setItems([...items, newItem]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      setItems(items.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <SearchForm addItem={addItem} />
      {isLoading ? <p>Loading...</p> : <ItemList items={items} deleteItem={deleteItem} />}
    </div>
  );
}

export default App;