import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import SummaryTable from "./SummaryTable";

import { getItems } from "../../services/itemService";
import { useItemHandlers } from "../../services/useItemHandlers";

function NetWorth({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(setIsLoading, setItems);
  }, []);

  const { handleAddItem, handleDeleteItem, handleRefreshItem, toggleInclude } = useItemHandlers(setIsLoading, setItems, items);
  const currentItems = items.filter(item => item.included);
  const filteredItems = currentItems.filter(item => item.userId === (user.user ? user.user.uid : 'public'))

  // Calculate total prices
  const calculateTotals = (items) => {
    const totals = items.reduce(
      (acc, item) => {
        const ebayData = item.ebayData;
        if (ebayData) {
          acc.totalAverage += ebayData.average_price || 0;
          acc.totalMedian += ebayData.median_price || 0;
          acc.totalMax += ebayData.max_price || 0;
          acc.totalMin += ebayData.min_price || 0;
        }
        return acc;
      },
      { totalAverage: 0, totalMedian: 0, totalMax: 0, totalMin: 0 }
    );

    return {
      totalAverage: totals.totalAverage.toFixed(2),
      totalMedian: totals.totalMedian.toFixed(2),
      totalMax: totals.totalMax.toFixed(2),
      totalMin: totals.totalMin.toFixed(2)
    };
  };

  const { totalAverage, totalMedian, totalMax, totalMin } = calculateTotals(filteredItems);

  return (
    <>
    <div className="net-wealth">
        <h1>Net Wealth</h1>
        <SummaryTable 
            totalAveragePrice={totalAverage} 
            totalMedianPrice={totalMedian} 
            totalMaxPrice={totalMax} 
            totalMinPrice={totalMin} 
        />
    </div>
    <h1>Items Included In Calculations:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ItemList 
          items={filteredItems}
          deleteItem={handleDeleteItem} 
          refreshItem={handleRefreshItem} 
          toggleInclude={toggleInclude}
          user={user}
        />
      )}
    </>
  );
}

export default NetWorth;
