import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import EachItem from './EachItem';


function ItemList({ items, deleteItem, refreshItem, toggleInclude }) {
  const { pageNumber } = useParams(); // Read page number from URL parameters
  const navigate = useNavigate();
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);
  
  useEffect(() => {
    // Update currentPage state when URL parameter changes
    setCurrentPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  useEffect(() => {
    // Update the URL when currentPage state changes
    const currentPath = location.pathname.split('/').slice(0, -1).join('/');
    navigate(`${currentPath}/${currentPage}`, { replace: true });
  }, [currentPage, navigate, location.pathname]);



  // Create a reversed copy of the items array to display most recent item first
  const reversedItems = [...items].reverse();

  // Calculate the current page and which items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reversedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(reversedItems.length / itemsPerPage);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Condition</th>
          <th>Keywords</th>
          <th>Excluded Keywords</th>
          <th>Category ID</th>
          <th>Average Price</th>
          <th>Median Price</th>
          <th>Max Price</th>
          <th>Min Price</th>
          <th>Delete?</th>
          <th>Refresh?</th>
          <th>Include?</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <EachItem 
            key={item._id} 
            item={item} 
            deleteItem={deleteItem} 
            refreshItem={refreshItem} 
            toggleInclude={toggleInclude}
          />
        ))}
      </tbody>
    </table>
    <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
    </div>
    </>
  );
}

export default ItemList;
