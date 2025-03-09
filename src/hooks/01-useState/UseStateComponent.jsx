import { useState } from "react";
import React from "react";

function UseStateComponent() {
  const [data, setData] = useState([
    { id: 1, name: "Ahmer", age: 22 },
    { id: 2, name: "Ali", age: 22 },
    { id: 3, name: "Umer", age: 22 },
    { id: 4, name: "Kaka", age: 22 },
    { id: 5, name: "Mithankania", age: 22 },
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseStateComponent</h1>
      <div className="container">
        {data.map((mereNames) => (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>Name: {mereNames.name}</h3>
            <p>Age: {mereNames.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseStateComponent;
