import React from "react";
import { useContext } from "react";
import { localBox } from "./LocalBoxContext";

const LocalBoxData = () => {
  const { credit, debit, balance } = useContext(localBox);

  return (
    <>
      <div className="d-flex text-white w-75 mb-4 align-items-center justify-content-center py-4 rounded-4 border bg-white">
        <h1 className="me-2 text-success">Credit:</h1>
        <h1 className="text-success">{credit}</h1>
      </div>

      <div className="d-flex text-white w-75 border mb-4 align-items-center justify-content-center py-4 rounded-4 bg-white">
        <h1 className="me-2 text-danger">Debit:</h1>
        <h1 className="text-danger">{debit}</h1>
      </div>

      <div className="d-flex text-white w-75 border mb-4 align-items-center justify-content-center py-4 rounded-4 bg-white">
        <h1 className="me-2 text-info">Total Balance:</h1>
        <h1 className="text-info">{balance}</h1>
      </div>
    </>
  );
};

export default LocalBoxData;