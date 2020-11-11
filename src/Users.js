import React, { useState, useEffect } from "react";
import { Table, Alert } from "react-bootstrap";

const Users = () => {
  const [list, setlist] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    console.log("heeeeeeeeeeeeee");
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          console.warn("result", result);
          setlist(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((error) => {
        // alert('catch block')
        let collection = localStorage.getItem("users");
        setlist(JSON.parse(collection));
        setMode("Offline");
      });
  }, []);

  //will go into catch block when any issue in api
  return (
    <>
      {mode === "Offline" ? (
        <div>
          <Alert variant='warning'>You are in offline mode</Alert>
        </div>
      ) : null}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
