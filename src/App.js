import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>React CRUD Application</h1>
      <Link to="/list" className="btn btn-primary mt-3">
        View User List
      </Link>
    </div>
  );
};

export default App;
