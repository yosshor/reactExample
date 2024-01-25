// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>

      {/* Link to the About page */}
      <Link to={"./Components/Counter/Counter"}>Dashboard</Link>
    </div>
  );
};

export default Home;
