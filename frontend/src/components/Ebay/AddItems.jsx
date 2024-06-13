import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import ItemList from "./ItemList";

import { getItems } from "../../services/itemService";
import { useItemHandlers } from "../../services/useItemHandlers";

function Search({user}) {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getItems(setIsLoading, setItems);
    }, []);

    const { handleAddItem, handleDeleteItem, handleRefreshItem, toggleInclude } = useItemHandlers(setIsLoading, setItems, items);

    return (
        <>
            <h1>Search</h1>
            <SearchForm addItem={handleAddItem} user={user}/>
            <h1>All Items:</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ItemList 
                    items={items}
                    deleteItem={handleDeleteItem} 
                    refreshItem={handleRefreshItem} 
                    toggleInclude={toggleInclude}
                    user={user}
                />
            )}
        </>
    )
}

export default Search;