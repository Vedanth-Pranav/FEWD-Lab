import React, { useEffect, useState } from 'react';

const ApiLifeCycle = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Mounted');

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        console.log('Data fetched');
      });

    return () => console.log('Unmounted');
  }, []);

  useEffect(() => {
    if (user) console.log('Updated');
  }, [user]);

  return (
    <div>
      <h2>API Life Cycle Demo</h2>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ApiLifeCycle;
