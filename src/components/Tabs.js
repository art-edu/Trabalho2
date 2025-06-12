import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { motion } from "framer-motion";
import "../styles/Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        <button
          className={activeTab === "form" ? "active" : ""}
          onClick={() => setActiveTab("form")}
        >
          Cadastrar Comida
        </button>
        <button
          className={activeTab === "list" ? "active" : ""}
          onClick={() => setActiveTab("list")}
        >
          Listagem de Comidas
        </button>
      </div>
      <motion.div
        className="tabs-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {activeTab === "form" ? <Form /> : <List />}
      </motion.div>
    </div>
  );
};

export default Tabs;