import getEbayData from "./ebay-api";

const BASE_URL = import.meta.env.DEV ? 'http://localhost:8080/api/searches' : ''; // Deploy Link

export const addItem = async (search, setIsLoading, setItems, items) => {
    try {
      setIsLoading(true);
  
      const ebayResponse = await getEbayData(search);

      // Now store the eBay data in your database
      const itemData = {
        keywords: search.keywords,
        excluded_keywords: search.excluded_keywords,
        max_search_results: search.max_search_results,
        userId: 'bob',
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
  
      console.log('Stored in DB:', dbResponse);
  
      // If newItem is successfully created, update the state
      if (ebayResponse) {
        setItems([...items, ebayResponse]);
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
