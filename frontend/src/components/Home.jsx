import React from 'react';

function Home({ user }) {
  // Make a request to get user if needed
  return (
    <div>
      <h1>Welcome {user.user && user.user.email}</h1>
      {/* <p>User ID: {user.user && user.user.uid}</p> */}
      <h3>Head to add items to start.</h3>
      {!user.user && (
        <h5>Login to access your own list, the public list can be seen and edited by anyone.</h5>
      )}
      <h6>Please do note that it may take over a minute to load if the site has been unused for a while.</h6>
    </div>
  );
}

export default Home;
