import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/blogs');

        if (!response.ok) {
          throw Error;
        }

        const data = await response.json();
        setBlogs(data);
        setIsPending(false);
      }
      catch(err) {
        setError('Could not fetch data from the server');
        setIsPending(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
