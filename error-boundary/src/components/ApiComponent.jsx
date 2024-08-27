// ApiComponentOne.jsx
import { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicodde.com/users/1")
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    throw new Error('Failed to fetch data');
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return(
    <div>
      <h1>API Component</h1>
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>
    </div>
  )
};

export default ApiComponent;