import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { InstructionTest } from "./components/pages/InstructionTest";
import { LoadingTest } from "./components/pages/LoadingTest";
import { SmoothTest } from "./components/pages/SmoothTest";
import { TreeTest } from "./components/pages/TreeTest";

function App() {
  return (
    <BrowserRouter basename="Component">
      <Route exact path="/" component={Home} />
      <Route path="/instruction" component={InstructionTest} />
      <Route path="/smooth" component={SmoothTest} />
      <Route path="/tree" component={TreeTest} />
      <Route path="/loading" component={LoadingTest} />
    </BrowserRouter>
  );
}

export default App;
