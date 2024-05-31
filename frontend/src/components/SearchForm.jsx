import React, { useRef } from 'react';

function SearchForm({ addItem }) {
  const searchRef = useRef();
  const excludeRef = useRef();
  const numberRef = useRef();
  // const completeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      keywords: searchRef.current.value,
      excluded_keywords: excludeRef.current.value,
      max_search_results: numberRef.current.value,

      // text: searchRef.current.value,
      // completed: completeRef.current.checked,
      // userId: 'bob',
    };
    await addItem(body);
    searchRef.current.value = '';
    excludeRef.current.value = '';
    completeRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <br />
        <input type="text" ref={searchRef} placeholder='Enter keywords or item number' />
      </label>
      <br />
      <label>
        <input type="text" ref={excludeRef}placeholder='Exclude words from your search' />
      </label>
      <br />
      <label>
        <span>Number of results to look at:</span>
        <select ref={numberRef}>
          <option value="60">60</option>
          <option value="120">120</option>
          <option value="240">240</option>
        </select>
      </label>
      <br />
      {/* <label>
        <input type="checkbox" ref={completeRef} />
      </label> */}
      <br /><br />
      <button>Add Item</button>
    </form>
  );
}

export default SearchForm;
