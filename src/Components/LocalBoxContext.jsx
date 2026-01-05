import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const localbox = createContext({
  add: () => {},
  list: [],
  updateData: () => {},
  deleteData: () => {},
  eidtValue: null,
  balance: 0,
  credit: 0,
  debit: 0,
});

const LocalBoxContext = ({ children }) => {
  const initialState = [
    {
      id: 1,
      title: "Salary",
      amount: "100000",
      category: "Generel",
      type: "Credit",
    },
  ];

  const [data, setData] = () => {
    const saved = localStorage.getItem("localBox");

    return saved ? JSON.parse(saved) : initialState;
  };

  const [eidtValue, setEditValue] = useState(null);

  const add = (input) => {
    if (!input.title || !input.amount || !input.category || !input.type) {
      alert("please fill all the data required");
    } else if (eidtValue) {
      setData((prev) =>
        prev.map((d) =>
          d.id === eidtValue.id
            ? {
                ...d,
                title: input.title,
                amount: input.amount,
                type: input.type,
                category: input.category,
              }
            : d
        )
      );
    } else {
      const newData = {
        id: new Date().getTime(),
        title: input.title,
        amount: input.amount,
        type: input.type,
        category: input.category,
      };
      setData((prev) => [...prev, newData]);
    }
  };

  useEffect(() => {
    localStorage.setItem("localBox", JSON.stringify(data));
  }, [data]);

  const updateData = (id) => {
    const updateVal = data.find((d) => d.id == id);

    setEditValue(updateVal);
  };

  const deleteData = (id) => {
    const remainData = data.filter((d) => d.id !== id);

    setData(remainData);
  };

  const value = {
    add,
    list: data,
    updateData,
    eidtValue,
    deleteData,
    credit,
    debit,
    balance,
  };

  return <localbox.Provider value={value}> {children} </localbox.Provider>;
};

export default LocalBoxContext;
