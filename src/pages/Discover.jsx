import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Discover() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [lives, setLives] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    loadProducts();
    loadCategories();
    loadLives();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadLives = async () => {
    try {
      const res = await api.get("/live");
      setLives(res.data);
      console.log("ACTIVE LIVES:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProducts = products.filter((product) => {
    if (!selectedCategory) return true;

    return product.category?.name === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* HERO */}
      <section className="px-8 py-12">

        <p className="uppercase tracking-[5px] text-orange-600 font-medium">
          Explorer
        </p>

        <h1 className="text-7xl font-black mt-4">
          Trouvez votre
          <span className="italic text-orange-600">
            {" "}pépite.
          </span>
        </h1>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Rechercher un produit, un live..."
            className="input input-bordered w-full max-w-3xl rounded-full"
          />
        </div>

      </section>


      {/* Categories */}
      <section className="px-8 flex gap-4 flex-wrap">

        <button
          onClick={() => setSelectedCategory("")}
          className={`btn rounded-full ${
            selectedCategory === "" ? "btn-neutral" : ""
          }`}
        >
          Tout
        </button>

        {categories.map((category) => (

          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={`btn rounded-full ${
              selectedCategory === category.name
                ? "btn-neutral"
                : ""
            }`}
          >
            {category.name}
          </button>

        ))}

      </section>


      {/* Live Now */}
      <section className="px-8 py-12">

        <h2 className="text-4xl font-bold mb-8">
          🔴 Live Now
        </h2>


        {lives.length === 0 ? (

          <p className="text-gray-500">
            No live available
          </p>

        ) : (

          <div className="grid md:grid-cols-3 gap-6">

            {lives.map((live) => (

              <div
                key={live.id}
                className="card bg-white shadow-lg overflow-hidden"
              >

                <img
                  src={
                    live.product.image
                      ? `http://127.0.0.1:8000/storage/${live.product.image}`
                      : "https://via.placeholder.com/300x200?text=Live"
                  }
                  alt={live.product.name}
                  className="h-48 w-full object-cover"
                />


                <div className="card-body">

                  <h3 className="card-title">
                    {live.product.name}
                  </h3>


                  <p className="text-orange-600 font-bold">
                    {live.product.price} DT
                  </p>


                  <p className="text-gray-500">
                    {live.product.category?.name}
                  </p>


                  <Link
  to={`/watch-live/${live.product.id}`}
  className="btn btn-error"
>
  🔴 Watch Live
</Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* Products */}
      <section className="px-8 py-12">

        <h2 className="text-4xl font-bold mb-8">
          Produits
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="card bg-white shadow-lg"
            >

              <div className="card-body">

                <h3 className="card-title">
                  {product.name}
                </h3>


                <p>
                  {product.description}
                </p>


                <p className="font-bold text-orange-600">
                  {product.price} DT
                </p>


                <p className="text-sm text-gray-500">
                  {product.category?.name}
                </p>


                <button className="btn btn-primary">
                  View Product
                </button>


              </div>

            </div>

          ))}

        </div>

      </section>


    </div>
  );
}