import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import EachItem from './EachItem';


function ItemList({ items, deleteItem, refreshItem, toggleInclude, user }) {
  const { pageNumber } = useParams(); // Read page number from URL parameters
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialItemsPerPage = Number(queryParams.get('itemsPerPage')) || 10;

  const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  
  useEffect(() => {
    // Update currentPage state when URL parameter changes
    setCurrentPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  useEffect(() => {
    // Update the URL when currentPage or itemsPerPage state changes
    const currentPath = location.pathname.split('/').slice(0, -1).join('/');
    navigate(`${currentPath}/${currentPage}?itemsPerPage=${itemsPerPage}`, { replace: true });
  }, [currentPage, itemsPerPage, navigate, location.pathname]);



  // Create a reversed copy of the items array to display most recent item first
  const reversedItems = [...items].reverse();

  // Calculate the current page and which items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reversedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(reversedItems.length / itemsPerPage);
  const filteredItems = currentItems.filter(item => item.userId === (user.user ? user.user.uid : 'public'));

  // console.log(currentItems,filteredItems, 'test')


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page whenever items per page changes
  };

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
          {filteredItems.map((item) => (
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
      <div className="pagination-container">
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
        <label className="items-per-page">
              <span>Items per Page: </span>
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
        </label>
      </div>
      
    </>
  );
}

export default ItemList;
