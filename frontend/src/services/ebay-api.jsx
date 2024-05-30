// import { response } from 'express';
import axios from 'axios';


const apiKey = import.meta.env.VITE_API_KEY;

// const options = {
//   method: 'POST',
//   url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': apiKey,
//     'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com'
//   },
//   data: {
//     keywords: 'iPhone',
//     excluded_keywords: 'locked cracked case box read LCD',
//     max_search_results: '100',
//     category_id: '9355',
//     remove_outliers: 'true',
//     site_id: '0',
//     aspects: [
//       {
//         name: 'Model',
//         value: 'Apple iPhone X'
//       },
//       {
//         name: 'LH_ItemCondition',
//         value: '3000'
//       },
//       {
//         name: 'Network',
//         value: 'Unlocked'
//       },
//       {
//         name: 'Storage Capacity',
//         value: '64 GB'
//       }
//     ]
//   }
// };

export default async function getEbayData(search){
    const options = {
        method: 'POST',
        url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com'
        },
        data: {
          keywords: search.searchbox.value,
          excluded_keywords: search.excludedsearchbox.value,
          max_search_results: search.dropdown.value, // 60, 120, OR 240
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




    try {
        const response = await axios.request(options);
        console.log(response.data);
        console.log('response', response)
        return response
    } catch (error) {
        console.error(error);
    }
}


