import React, { useContext, useState } from "react";
import { FoodContext } from "../contexts/FoodContext";
import "../styles/Form.css";

const Form = () => {
  const { addFoodItem } = useContext(FoodContext);
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!formData.calories.trim() || isNaN(Number(formData.calories)))
      newErrors.calories = "As calorias devem ser um número válido.";
    if (!formData.description.trim())
      newErrors.description = "A descrição é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addFoodItem(formData);
      setFormData({ name: "", calories: "", description: "" });
      setErrors({});
      setSuccessMessage("Comida cadastrada com sucesso!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Comida Fitness</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Calorias:
          <input
            type="text"
            value={formData.calories}
            onChange={(e) =>
              setFormData({ ...formData, calories: e.target.value })
            }
          />
          {errors.calories && (
            <span className="error">{errors.calories}</span>
          )}
        </label>
        <label>
          Descrição:
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;