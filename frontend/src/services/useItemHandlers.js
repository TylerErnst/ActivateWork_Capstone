import { addItem, deleteItem, refreshItem } from "./itemService";
import getEbayData from "./ebay-api";

export const useItemHandlers = (setIsLoading, setItems, items) => {
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
  };

  const toggleInclude = (id, checked) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, checked } : item
      )
    );
  };

  return {
    handleAddItem,
    handleDeleteItem,
    handleRefreshItem,
    toggleInclude,
  };
};