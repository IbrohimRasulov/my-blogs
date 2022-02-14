import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw Error;
        }

        const data = await response.json();
        setData(data);
        setIsPending(false);
      }
      catch(err) {
        setError('Could not fetch data from the server');
        setIsPending(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
