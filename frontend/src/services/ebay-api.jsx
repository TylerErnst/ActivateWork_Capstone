// import { response } from 'express';
import axios from 'axios';


const apiKey = import.meta.env.VITE_API_KEY;

export default async function getEbayData(search){
  console.log('ebay search', search)
    const options = {
        method: 'POST',
        url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com'
        },
        data: {
          keywords: search.keywords,
          excluded_keywords: search.excluded_keywords,
          max_search_results: search.max_search_results, // 60, 120, OR 240
        //   category_id: '9355',
          remove_outliers: 'true',
          site_id: '0',
        //   aspects: [
        //     {
        //       name: 'Model',
        //       value: 'Apple iPhone X'
        //     },
        //     {
        //       name: 'LH_ItemCondition',
        //       value: '3000'
        //     },
        //     {
        //       name: 'Network',
        //       value: 'Unlocked'
        //     },
        //     {
        //       name: 'Storage Capacity',
        //       value: '64 GB'
        //     }
        //   ]
        }
      };


    console.log('ebay Data', options)

    try {
      const response = await axios.request(options);
      console.log('eBay API response:', response.data);
      return response.data;
      
    } catch (error) {
      console.error(error);
    }
}


