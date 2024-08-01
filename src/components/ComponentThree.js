import React, { useContext } from "react";
import MyContext from "./../context/MyContext";

const ComponentThree = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      <p>Updating Value from Component Three: </p>
      <button className="button" onClick={() => setValue(value + 1)}>
        Increament
      </button>

      <button className="button" onClick={() => setValue(value - 1)}>
        Decreament
      </button>
      <button className="button" onClick={() => setValue(0)}>
        Reset
      </button>
    </div>
  );
};

export default ComponentThree;
