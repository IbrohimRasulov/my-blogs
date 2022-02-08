import React from "react";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(30);

  const handleClick = () => {
    setName('Ibrohim');
    setAge(22);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}

export default Home;
