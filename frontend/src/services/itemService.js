import getEbayData from "./ebay-api";

const BASE_URL = import.meta.env.DEV ? 
'http://localhost:8080/api/searches' : 
import.meta.env.VITE_BACKEND_URL; // Deploy Link

// console.log(import.meta.env.VITE_BACKEND_URL)

export const getItems = async function(setIsLoading, setItems) {
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

export const getItemById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const searchData = await response.json();
        console.log(searchData);
        return searchData;
    } catch (err) {
        console.log(err);
    }
};

export const addItem = async (body, setIsLoading, setItems, items) => {
    try {
        setIsLoading(true);
    
        const search = body.search;
        console.log('addItem Search', search);
        const ebayResponse = await getEbayData(search);

        // Logic to request and store eBay data in the database
        const itemData = {
            search_name: body.other.search_name,
            keywords: search.keywords,
            excluded_keywords: search.excluded_keywords,
            max_search_results: search.max_search_results,
            category_id: search.category_id,
            aspects: search.aspects,
            userId: body.other.userId,
            userEmail: body.other.userEmail,
            ebayData: ebayResponse
        };

        console.log('Sent to DB:', itemData)
    
        const dbResponse = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(itemData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const newItem = await dbResponse.json(); // Ensure response is parsed to JSON

        console.log('Stored in DB:', newItem);

        // If newItem is successfully created, update the state
        if (newItem) {
            setItems([...items, newItem]);
        }
  
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
};

export const deleteItem = async (id, setIsLoading, setItems, items) => {
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

export const refreshItem = async (id, setIsLoading, setItems, items) => {
    try {
        setIsLoading(true);
        console.log('refresh ', 'id', id)
        const item = await getItemById(id);

        const search = {
              keywords: item.keywords,
              excluded_keywords: item.excluded_keywords,
              max_search_results: item.max_search_results,
              category_id: item.category_id,
              aspects: item.aspects,
        }

        console.log('refreshItem Search', search)
        const ebayResponse = await getEbayData(search);

        // Construct the updated item data
        const updatedItemData = {
            // search_name: body.other.search_name,
            keywords: search.keywords,
            excluded_keywords: search.excluded_keywords,
            max_search_results: search.max_search_results,
            // userId: body.other.userId,
            ebayData: ebayResponse
        };

        console.log('Updated item data', updatedItemData);

        // Send a PATCH request to update the item in the database with the new eBay data
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedItemData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json(); // Ensure response is parsed to JSON

        // Check if result has the correct structure and extract the updated item
        const updatedItem = result.search ? result.search : result;

        console.log('Updated in DB:', updatedItem);

        // If the item is successfully updated, replace the existing item in the state with the updated one
        if (updatedItem) {
            setItems(prevItems => {
              const updatedItems = prevItems.map(item => (item._id === id ? updatedItem : item));
              console.log('Updated items:', updatedItems);
              return updatedItems;
            });
          }
        

    } catch (err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
};

export const refreshIncludeItem = async (id, setIsLoading, setItems, items, checked) => {
  
  try {
      setIsLoading(true);
      console.log("CHECKED:", checked, id)
     

      // Construct the updated item data
      const updatedItemData = {
        included: checked
      };

      console.log('Included data', updatedItemData);

      // Send a PATCH request to update the item in the database with the new eBay data
      const response = await fetch(`${BASE_URL}/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(updatedItemData),
          headers: {
              'Content-Type': 'application/json',
          },
      });

      const result = await response.json(); // Ensure response is parsed to JSON

        // Check if result has the correct structure and extract the updated item
        const updatedItem = result.search ? result.search : result;

        console.log('Updated in DB:', updatedItem);

        // If the item is successfully updated, replace the existing item in the state with the updated one
        if (updatedItem) {
            setItems(prevItems => {
              const updatedItems = prevItems.map(item => (item._id === id ? updatedItem : item));
              console.log('Updated items:', updatedItems);
              return updatedItems;
          });
        }
        

    } catch (err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
};

