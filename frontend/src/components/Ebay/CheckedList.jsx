import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import ItemList from "./ItemList";

import { getItems } from "../../services/itemService";
import { useItemHandlers } from "../../services/useItemHandlers";

function CheckedList({user}) {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getItems(setIsLoading, setItems);
    }, []);

    const { handleAddItem, handleDeleteItem, handleRefreshItem, toggleInclude } = useItemHandlers(setIsLoading, setItems, items);
    const filteredItems = items.filter(item => item.included);

    return (
        <>
            <h1>Items</h1>
            <SearchForm addItem={handleAddItem} user={user}/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ItemList 
                    items={filteredItems}
                    deleteItem={handleDeleteItem} 
                    refreshItem={handleRefreshItem} 
                    toggleChecked={toggleInclude}
                    user={user}
                />
            )}
        </>
    )
}

export default CheckedList;