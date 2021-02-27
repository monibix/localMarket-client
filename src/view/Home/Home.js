import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/signup">signup</Link>
      <Link to="/login">login</Link>
    </div>
  );
}

export default Home;
