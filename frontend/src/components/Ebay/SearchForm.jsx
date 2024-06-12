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
    <form onSubmit={handleSubmit}>
      <label>
        {/* Search: */}
        {/* <br /> */}
        <input type="text" ref={searchRef} placeholder='Enter keywords or item number' required/>
      </label>
      <br />
      <label>
        <input type="text" ref={excludeRef}placeholder='Exclude words from your search' />
      </label>
      <br />
      <br />
      <label>
        <input type="number" ref={catRef} placeholder='Category ID'/>
        <br />
        <a href="https://www.isoldwhat.com/">Category ID Lookup</a>
      </label>
      <br />
      <br />
      <span>Condition: </span>
        <select ref={conditionRef} defaultValue="3000">
          <option value="">Not Specified</option>
          <option value="1000">New</option>
          <option value="3000">Used</option>
          <option value="7000">For parts or not working</option>
        </select>
      <br />
      <label>
        <span>Number of results to look at: </span>
        <select ref={numberRef} defaultValue="120">
          <option value="60">60</option>
          <option value="120">120</option>
          {/* API allows for a search of 240 (and defaults to that) but the db can't accept that much */}
          {/* <option value="240">240</option> */}
        </select>
      </label>
      <br />
      <label>
        <input type="text" ref={nameRef} placeholder='Custom Search Name'/>
      </label>
      <br />
      <button>Add Item</button>
      <br />
      <br />
    </form>
  );
}

export default SearchForm;
