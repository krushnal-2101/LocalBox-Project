import React from "react";
import LocalBoxContext from "./Components/LocalBoxContext";
import LocalBoxForm from "./Components/LocalBoxForm";
import LocalBoxList from "./Components/LocalBoxList";

const App = () => {
  return (
    <>
      <LocalBoxContext>
        <LocalBoxForm />
        <LocalBoxList />
      </LocalBoxContext>
    </>
  );
};

export default App;
