import { useState } from "react";

import "./App.css";

function App() {
  let [a, SetA] = useState(5);
  return (
    <>
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => {
          if (a > 0) {
            SetA(a - 1);
          }
        }}
      >
        -
      </button>
      <h1>{a}</h1>
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => {
          if (a <= 9) {
            SetA(a + 1);
          }
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
