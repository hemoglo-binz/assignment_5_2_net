import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    fetch(`https://67288605270bd0b97555ef13.mockapi.io/sample/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error loading user:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setChangeCount((prev) => prev + 1);

    fetch(`https://67288605270bd0b97555ef13.mockapi.io/sample/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user, [name]: value }),
    }).catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="container mt-5">
      <h1>Update User</h1>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={user.address || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <p>Total changes made: {changeCount}</p>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/list")}>
          Back
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
