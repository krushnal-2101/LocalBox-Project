import React, { useState, useContext, useEffect } from "react";
import { localBox } from "./LocalBoxContext";
import LocalBoxData from "./LocalBoxData";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const LocalBoxForm = () => {
  const { add, editValue } = useContext(localBox);

   useEffect(() => {
    editValue ? setInput(editValue) : "";
  }, [editValue]);

  const [input, setInput] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
  });

  const handleInput = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(input);
    setInput({ title: "", amount: "", type: "", category: "" });
  };

  return (
    <>
      <Container className="mt-5 border border-black rounded-5 p-5 mb-5">
        <h1 className="text-center mb-4">Expenses Tracker</h1>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-black">Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  className="w-75"
                  onChange={(e) => handleInput("title", e)}
                  value={input.title}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-black">Amount</Form.Label>
                <Form.Control
                  name="amount"
                  type="number"
                  placeholder="Enter amount"
                  className="w-75"
                  onChange={(e) => handleInput("amount", e)}
                  value={input.amount}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <span className="text-black me-2">Credit</span>
                <input
                  id="credit"
                  type="radio"
                  onChange={(e) => handleInput("type", e)}
                  value="credit"
                  name="type"
                  checked={input.type === "credit"}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput4"
              >
                <span className="text-black me-2">Debit</span>
                <input
                  type="radio"
                  id="debit"
                  onChange={(e) => handleInput("type", e)}
                  value="debit"
                  name="type"
                  checked={input.type === "debit"}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput5"
              >
                <span className="text-black me-2">Category</span>
                <select
                  name="category"
                  id="category"
                  className="p-1 rounded text-center"
                  onChange={(e) => handleInput("category", e)}
                  value={input.category}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="shopping">Shopping</option>
                </select>
              </Form.Group>
              <Button variant="success" type="submit" className="w-75">
                Add
              </Button>
            </Col>
            <Col md={6}>
              <LocalBoxData />
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LocalBoxForm;