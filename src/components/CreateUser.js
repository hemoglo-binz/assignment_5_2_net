import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then(() => navigate("/list"))
      .catch((error) => console.error("Error creating user:", error));
  };

  return (
    <div className="container mt-5">
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input ref={nameRef} type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input ref={emailRef} type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input ref={phoneRef} type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input ref={addressRef} type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
