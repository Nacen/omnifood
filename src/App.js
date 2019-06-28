import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Features from "./components/features/features";
import Meals from "./components/meals/meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <Meals />
    </React.Fragment>
  );
}

export default App;
