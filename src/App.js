import React from "react";
import "./styles.css";

import ListInput from "./components/listAdder";
import ListOutput from "./components/listDisplay";

export default function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <p>
        Add items to your todo list with the input below, then mark items as
        complete with the checkboxes
      </p>
      <ListInput />
      <div>
        <ListOutput />
      </div>
    </div>
  );
}
