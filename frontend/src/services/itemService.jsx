import getEbayData from "./ebay-api";

const BASE_URL = import.meta.env.DEV ? 'http://localhost:8080/api/searches' : ''; // Deploy Link

export const addItem = async (body, setIsLoading, setItems, items) => {
    try {
      setIsLoading(true);
  
      const search = body.search;
      const ebayResponse = await getEbayData(search);

      // Now store the eBay data in your database
      const itemData = {
        search_name: body.other.search_name,
        keywords: search.keywords,
        excluded_keywords: search.excluded_keywords,
        max_search_results: search.max_search_results,
        userId: body.other.userId,
        ebayData: ebayResponse
      };

      console.log('Item data', itemData)
  
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
      setItems(prevItems => [...prevItems, newItem]); // Ensure the latest state is used
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
