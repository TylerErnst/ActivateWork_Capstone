import React, { useRef } from 'react';

function SearchForm({ addItem, user }) {
  const searchRef = useRef();
  const excludeRef = useRef();
  const catRef = useRef();
  const conditionRef = useRef();
  const numberRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      search: {
        keywords: searchRef.current.value,
        excluded_keywords: excludeRef.current.value,
        max_search_results: numberRef.current.value,
        category_id: catRef.current.value,
        aspects: [
          {
            name: 'LH_ItemCondition',
            value: conditionRef.current.value
          }
        ]
      },
      other: {
        search_name: nameRef.current.value,
        userId: user.user? user.user.uid : 'public',
        userEmail: user.user? user.user.email : "",
      }
    };
    await addItem(body);
    searchRef.current.value = '';
    excludeRef.current.value = '';
    catRef.current.value = '';
    nameRef.current.value = '';
  };

   return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" ref={searchRef} placeholder='Enter keywords or item number' required />
      </div>
      <div className="form-group">
        <input type="text" ref={excludeRef} placeholder='Exclude words from your search' />
      </div>
      <div className="form-group">
        <input type="number" ref={catRef} placeholder='Category ID' />
        <a href="https://www.isoldwhat.com/" target="_blank" rel="noopener noreferrer">Category ID Lookup</a>
      </div>
      <div className="form-group">
        <label htmlFor="condition">Condition:</label>
        <select id="condition" ref={conditionRef} defaultValue="3000">
          <option value="">Not Specified</option>
          <option value="1000">New</option>
          <option value="3000">Used</option>
          <option value="7000">For parts or not working</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="results">Number of results to look at:</label>
        <select id="results" ref={numberRef} defaultValue="120">
          <option value="60">60</option>
          <option value="120">120</option>
        </select>
      </div>
      <div className="form-group">
        <input type="text" ref={nameRef} placeholder='Custom Search Name' />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default SearchForm;
