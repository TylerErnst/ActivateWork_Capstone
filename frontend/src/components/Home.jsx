import React from 'react';

function Home({user}) {
  //make a request to get user
  return (
    <div>
      <h1>Welcome {user.user&&user.user.email}</h1>
      {/* <p>User ID: {user.user&&user.user.uid}</p> */}
      <p>Head to search to start.</p>
    </div>
  );
}

export default Home;