import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Features from "./components/features/features";
import Meals from "./components/meals/meals";
import Steps from "./components/steps/steps";
import Cities from "./components/cities/cities";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <Meals />
      <Steps />
      <Cities />
    </React.Fragment>
  );
}

export default App;
