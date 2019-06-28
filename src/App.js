import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Features from "./components/features/features";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      {/* <FavoriteMeals /> */}
    </React.Fragment>
  );
}

export default App;
