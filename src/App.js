import React from "react";
import { FoodProvider } from "./contexts/FoodContext";
import Tabs from "./components/Tabs";
import "./styles/App.css";

const App = () => {
  return (
    <FoodProvider>
      <div className="app-container">
        <Tabs />
      </div>
    </FoodProvider>
  );
};

export default App;