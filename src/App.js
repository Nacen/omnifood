import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Features from "./components/features/features";
import Meals from "./components/meals/meals";
import Steps from "./components/steps/steps";
import Cities from "./components/cities/cities";
import Testimonials from "./components/testimonials/testimonials";
import Signup from "./components/signup/signup";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <Meals />
      <Steps />
      <Cities />
      <Testimonials />
      <Signup />
    </React.Fragment>
  );
}

export default App;
