import { useState } from "react";
import api from "../services/api";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/categories", { name });

      setMessage("✅ Category created successfully");
      setName("");
    } catch (err) {
      console.log(err.response?.data);
      setMessage("❌ Error creating category");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Category</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
}