import React from 'react';

function SummaryTable({ totalAveragePrice, totalMedianPrice, totalMaxPrice, totalMinPrice }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Total Average Price</th>
          <th>Total Median Price</th>
          <th>Total Max Price</th>
          <th>Total Min Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalAveragePrice}</td>
          <td>{totalMedianPrice}</td>
          <td>{totalMaxPrice}</td>
          <td>{totalMinPrice}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SummaryTable;
