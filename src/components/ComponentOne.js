import React, { useContext } from "react";
import ComponentTwo from "./ComponentTwo";
import MyContext from "./../context/MyContext";

const ComponentOne = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>Displaying Value from Component One : {value}</p>
      <ComponentTwo />
    </div>
  );
};

export default ComponentOne;
