
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Products() {
  console.log("PRODUCTS COMPONENT LOADED");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");

      console.log("RAW RESPONSE:", res);
      console.log("DATA:", res.data);
      console.log("FIRST PRODUCT:", res.data[0]);

      setProducts(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        setError("You must be logged in to view products.");
      } else {
        setError("Something went wrong while loading products.");
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
  console.log("DELETE CLICKED", id);

  try {
    const res = await api.delete(`/products/${id}`);

    console.log("DELETE RESPONSE", res);

    setProducts(products.filter((p) => p.id !== id));

    alert("Product deleted successfully!");
  } catch (error) {
    console.log("DELETE ERROR", error);
    console.log("DELETE ERROR RESPONSE", error.response);

    alert("Failed to delete product.");
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;
  if (error) return <p style={{ padding: 20, color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            margin: 10,
            padding: 10,
          }}
        >
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>
            <b>{p.price} TND</b>
          </p>
          <p>Stock: {p.stock}</p>
        </div>
      ))}
    </div>
  );
}
