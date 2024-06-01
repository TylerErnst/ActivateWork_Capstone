import { useState, useEffect } from "react";

import "./App.css";

import SearchForm from "./components/SearchForm";
import ItemList from "./components/ItemList";
import { getItems, addItem, deleteItem, refreshItem } from "./services/itemService";
import getEbayData from "./services/ebay-api";

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:8080/api/searches"
  : ""; // Deploy Link

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(setIsLoading, setItems);
  }, []);

  const handleAddItem = async (body) => {
    const newItem = await addItem(body, setIsLoading, setItems, items);
    if (newItem) {
      getEbayData(body);
    }
  };

  const handleDeleteItem = (id) => {
    deleteItem(id, setIsLoading, setItems, items);
  };

  const handleRefreshItem = (id) => {
    refreshItem(id, setIsLoading, setItems, items);
  }

  return (
    <div>
      <h1>Items</h1>
      <SearchForm addItem={handleAddItem} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ItemList items={items} deleteItem={handleDeleteItem} refreshItem={handleRefreshItem}/>
      )}
    </div>
  );
}

export default App;
