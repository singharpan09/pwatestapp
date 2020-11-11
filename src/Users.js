import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [list, setlist] = useState([]);

  useEffect(() => {
    console.log("heeeeeeeeeeeeee");
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((res) => {
      res.json().then((result) => {
        console.warn("result", result);
        setlist(result);
      });
    });
  }, []);
  return (
    <>
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
            {
                list?.map((item,key)=>
                <tr key={key}>
                <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
              </tr>
                )
            }
         
          
        </tbody>
      </Table>
    </>
  );
};

export default Users;
