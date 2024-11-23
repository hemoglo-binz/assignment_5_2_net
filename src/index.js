import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ListUsers from "./components/ListUsers";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import UserDetails from "./components/UserDetails";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<ListUsers />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/update/:id" element={<UpdateUser />} />
      <Route path="/detail/:id" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
);
