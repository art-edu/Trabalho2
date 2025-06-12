// components/List.js
import React, { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";
import "../styles/List.css";

const List = () => {
  const { foodItems, deleteFoodItem } = useContext(FoodContext);

  return (
    <div className="list-container">
      <h2>Listagem de Comidas Fitness</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id} className="list-item">
            <div className="list-content">
              <strong>{item.name}</strong>
              <p>{item.calories} calorias</p>
              <p>{item.description}</p>
            </div>
            <button className="delete-button" onClick={() => deleteFoodItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
