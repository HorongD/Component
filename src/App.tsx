import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { InstructionTest } from "./components/pages/InstructionTest";

function App() {
  return (
    <BrowserRouter basename="Component">
      <Route exact path="/" component={Home} />
      <Route path="/instruction" component={InstructionTest} />
    </BrowserRouter>
  );
}

export default App;
