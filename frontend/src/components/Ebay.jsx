import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import ItemList from "./ItemList";

import { getItems, addItem, deleteItem, refreshItem } from "../services/itemService";

function Ebay() {
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
        <>
            <h1>Items</h1>
            <SearchForm addItem={handleAddItem} />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ItemList items={items} deleteItem={handleDeleteItem} refreshItem={handleRefreshItem}/>
            )}
        </>
    )
}

export default Ebay;