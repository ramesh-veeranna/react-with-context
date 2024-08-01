import React from "react";
import "./style.css";
import ComponentOne from "./components/ComponentOne";
import { MyProvider } from "./context/MyContext";
function App() {
  return (
    <div className="app">
      <MyProvider>
        <ComponentOne />
      </MyProvider>
    </div>
  );
}

export default App;
