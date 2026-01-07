import React, { useContext, useState } from "react";
import { localBox } from "./LocalBoxContext";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const LocalBoxList = () => {
  const { list, updateData, deleteData } = useContext(localBox);

  const [expenseQuery, setExpenseQuery] = useState({
    search: "",
    type: "all",
    category: "all",
    sortedBy: "latest",
  });

  const handleQuery = (identifier, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const filterList = list
    .filter((l) =>
      l.title.toLowerCase().includes(expenseQuery.search.toLocaleLowerCase())
    )
    .filter((l) =>
      expenseQuery.type === "all" ? true : l.type === expenseQuery.type
    )
    .filter((l) =>
      expenseQuery.category === "all" ? true : l.type === expenseQuery.category
    );

  const sortedList = [...filterList].sort((a, b) => {
    if (expenseQuery.sortedBy === "latest") {
      return a.id - b.id;
    }

    if (expenseQuery.sortedBy === "oldest") {
      return b.id - a.id;
    }

    if (expenseQuery.sortedBy === "ascending") {
      return Number(a.amount) - b.amount;
    }

    if (expenseQuery.sortedBy === "descending") {
      return Number(b.amount) - a.amount;
    }
  });

  return (
    <>
      <Container className="border border-black p-5 rounded-5">
        <h1 className="text-center text-black mb-4">Expenses Data</h1>
        <Row className="mb-3">
          <Col md={3}>
            <input
              type="text"
              className="rounded py-1 px-2 w-100"
              placeholder="Search"
              value={expenseQuery.search}
              onChange={(e) => handleQuery("search", e)}
            />
          </Col>
          <Col md={3}>
            <Form.Select
              name="type"
              value={expenseQuery.type}
              onChange={(e) => handleQuery("type", e)}
            >
              <option>Type</option>
              <option value="all">All</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              name="category"
              value={expenseQuery.category}
              onChange={(e) => handleQuery("category", e)}
            >
              <option>Category</option>
              <option value="general">General</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="shopping">Shopping</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              name="sortedBy"
              value={expenseQuery.sortedBy}
              onChange={(e) => handleQuery("sortedBy", e)}
            >
              <option>SortedBy</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="ascending">Money Ascending</option>
              <option value="descending">Money Descending</option>
            </Form.Select>
          </Col>
        </Row>

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
            {sortedList.length > 0 ? (
              sortedList.map((l) => (
                <tr key={l.id}>
                  <td>{l.title}</td>
                  <td>{l.amount}</td>
                  <td>{l.type}</td>
                  <td>{l.category}</td>
                  <td className="text-center">
                    <Button
                      onClick={() => updateData(l.id)}
                      className="btn btn-warning"
                    >
                      Edit
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button
                      onClick={() => deleteData(l.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <h5 className="text-center">No Data Found</h5>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default LocalBoxList;