import React, { useRef } from 'react';

function SearchForm({ addItem }) {
  const textRef = useRef();
  const completeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      text: textRef.current.value,
      completed: completeRef.current.checked,
      userId: 'bob',
    };
    await addItem(body);
    textRef.current.value = '';
    completeRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <br />
        <input type="text" ref={textRef} placeholder='Enter keywords or item number' />
      </label>
      <br />
      <label>
        <input type="text" placeholder='Exclude words from your search' />
      </label>
      <br />
      <label>
        <span>Number of results to look at:</span>
        <select name="" id="">
          <option value="60">60</option>
          <option value="120">120</option>
          <option value="240">240</option>
        </select>
      </label>
      <br />
      <label>
        <input type="checkbox" ref={completeRef} />
      </label>
      <br /><br />
      <button>Add Item</button>
    </form>
  );
}

export default SearchForm;
