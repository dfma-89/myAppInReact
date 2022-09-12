import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-center my-5">Users</h1>
      <div className="container">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
