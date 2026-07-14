
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      const res = await api.delete(`/products/${id}`);
console.log("DELETE SUCCESS:", res);
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.id !== id)
      );

      alert("Product deleted successfully");
    } catch (error) {
      console.log("DELETE ERROR FULL:", error);
console.log("DELETE RESPONSE:", error.response);
  console.log("DELETE ERROR:", error);
  console.log("DELETE RESPONSE:", error.response);
  console.log("DELETE DATA:", error.response?.data);

  alert("Delete failed");
}
  };
  const startLive = async (productId) => {

  try {

    const res = await api.post("/live/start", {
      product_id: productId
    });


    console.log(res.data);


    navigate(`/live-room/${productId}`);


  } catch(error) {

    console.log(error);

  }

};

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] px-8 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="uppercase tracking-[5px] text-orange-600 text-sm font-medium">
            Seller Studio
          </p>

          <h1 className="text-7xl font-black mt-3">
            Mes produits
          </h1>
        </div>

        <Link
          to="/add-product"
          className="
            bg-[#1c120f]
            text-white
            px-8
            py-4
            rounded-full
            text-xl
            font-bold
            hover:bg-orange-600
            transition
          "
        >
          + Ajouter un produit
        </Link>
      </div>

      <div className="border rounded-[30px] bg-white min-h-[450px] p-8">
        {products.length === 0 ? (
          <div className="h-[350px] flex flex-col items-center justify-center">
            <div className="text-6xl mb-6">
              📦
            </div>

            <h2 className="text-4xl italic mb-8">
              Aucun produit pour l'instant
            </h2>

            <Link
              to="/add-product"
              className="
                bg-orange-600
                text-white
                px-10
                py-4
                rounded-full
                text-xl
                font-bold
                hover:bg-orange-700
              "
            >
              Créer mon premier produit
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  bg-white
                  border
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                "
              >
                <img
                  src={
                    product.image
                      ? `http://127.0.0.1:8000/storage/${product.image}`
                      : "https://via.placeholder.com/300x200?text=Product"
                  }
                  alt={product.name}
                  className="rounded-xl h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {product.category?.name}
                  </p>

                  <p className="text-orange-600 font-bold text-xl mt-4">
                    {product.price} DT
                  </p>

                  <p className="text-gray-600 mt-2">
                    Stock : {product.stock}
                  </p>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-error flex-1"
                    >
                      Delete
                    </button>

                    <button
 onClick={() => startLive(product.id)}
 className="btn btn-success flex-1"
>
 🔴 Live
</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
