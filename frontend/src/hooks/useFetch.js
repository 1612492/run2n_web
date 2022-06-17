import { useState } from 'react';

function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function post(path = '', payload = {}) {
    try {
      setIsLoading(true);

      const response = await fetch(import.meta.env.VITE_API + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const json = await response.json();

      if (response.ok) {
        setData(json);
      } else {
        setError(json);
      }

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  function reset() {
    setIsLoading(false);
    setError(null);
    setData(null);
  }

  return {
    reset,
    post,
    isLoading,
    error,
    data,
  };
}

export default useFetch;
