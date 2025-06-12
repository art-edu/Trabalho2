import React, { createContext, useState, useEffect } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          id: item.id,
          name: `Comida ${item.id}`,
          calories: Math.floor(Math.random() * 500),
          description: item.body,
        }));
        setFoodItems(formattedData);
      });
  }, []);

  const addFoodItem = (item) => {
    setFoodItems([...foodItems, { ...item, id: Date.now() }]);
  };

  const deleteFoodItem = (id) => {
    setFoodItems(foodItems.filter((item) => item.id !== id));
  };

  return (
    <FoodContext.Provider value={{ foodItems, addFoodItem, deleteFoodItem }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodProvider };