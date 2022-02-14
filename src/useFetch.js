import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url, {signal: abortCont.signal});

          if (!response.ok) {
            throw Error;
          }

          const data = await response.json();
          setData(data);
          setIsPending(false);
        }
        catch(err) {
          if (!err.name === 'AbortError') {
            setError('Could not fetch data from the server');
            setIsPending(false);
          }
        }
      }

      fetchData();
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
