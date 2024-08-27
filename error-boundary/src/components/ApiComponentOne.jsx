/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

export const ApiComponentOne = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        showBoundary(err)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Company: {data.company.name}</p>
    </div>
  );
};

