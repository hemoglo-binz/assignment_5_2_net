import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://67288605270bd0b97555ef13.mockapi.io/sample/users")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Data format is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteUser = (id) => {
    fetch(`https://67288605270bd0b97555ef13.mockapi.io/sample/users/${id}`, {
      method: "DELETE",
    })
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">User List</h1>
      <Link to="/create" className="btn btn-success mb-3">
        Add New User
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/detail/${user.id}`} className="btn btn-info me-2">
                  Details
                </Link>
                <Link to={`/update/${user.id}`} className="btn btn-primary me-2">
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
