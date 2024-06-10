import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import ItemList from "./ItemList";

import { getItems } from "../../services/itemService";
import { handleAddItem, handleDeleteItem, handleRefreshItem, toggleChecked } from "../../services/useItemHandlers";

function Ebay({user}) {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getItems(setIsLoading, setItems);
    }, []);

    return (
        <>
            <h1>Items</h1>
            <SearchForm addItem={handleAddItem} user={user}/>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ItemList 
                    items={items}
                    deleteItem={handleDeleteItem} 
                    refreshItem={handleRefreshItem} 
                    toggleChecked={toggleChecked}
                    user={user}
                />
            )}
        </>
    )
}

export default Ebay;