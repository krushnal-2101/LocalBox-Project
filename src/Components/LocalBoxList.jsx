import React, { useContext } from "react";
import { localbox } from "./LocalBoxContext";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const LocalBoxList = () => {
  const { list, updateData, deleteData } = useContext(localbox);

  return (
    <>
      <Container className="border p-5 rounded-5">
        <h1 className="text-center text-white mb-3">Expenses Data</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.lenght > 0 ? (
              list.map((l) => (
                <tr key={l.id}>
                  <td>{l.title}</td>
                  <td>{l.amount}</td>
                  <td>{l.type}</td>
                  <td>{l.category}</td>
                  <td>
                    <Button variant={warning} onClick={() => updateData(l.id)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant={danger} onClick={() => deleteData(l.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <h5>No Data Available</h5>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default LocalBoxList;
