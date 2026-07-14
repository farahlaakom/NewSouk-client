import { useEffect, useState } from "react";
import api from "../services/api";

export default function AddProduct() {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: 1,
    category_id: "",
    image: null,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("stock", form.stock);
      formData.append("category_id", form.category_id);

      if (form.image) {
        formData.append("image", form.image);
      }

 for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}

await api.post("/products", formData);

      alert("Produit ajouté avec succès");

      setForm({
        name: "",
        description: "",
        price: "",
        stock: 1,
        category_id: "",
        image: null,
      });
    } catch (err) {
  console.log(err);
  console.log(err.response);
  console.log(err.response?.data);

  alert(JSON.stringify(err.response?.data));
}
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <div className="max-w-3xl mx-auto py-12 px-6">

        <p className="uppercase tracking-[4px] text-orange-600 text-sm mb-4">
          New Product
        </p>

        <h1 className="text-6xl font-black mb-12">
          Ajouter un produit
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="mb-8">
            <label className="block uppercase tracking-[3px] text-sm mb-3">
              Nom
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full
                rounded-full
                border
                bg-[#f3efec]
                px-6
                py-5
                text-lg
              "
            />
          </div>

          <div className="mb-8">
            <label className="block uppercase tracking-[3px] text-sm mb-3">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              className="
                w-full
                rounded-[40px]
                border
                bg-[#f3efec]
                px-6
                py-5
                text-lg
              "
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block uppercase tracking-[3px] text-sm mb-3">
                Prix (DT)
              </label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="
                  w-full
                  rounded-full
                  border
                  bg-[#f3efec]
                  px-6
                  py-5
                "
              />
            </div>

            <div>
              <label className="block uppercase tracking-[3px] text-sm mb-3">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="
                  w-full
                  rounded-full
                  border
                  bg-[#f3efec]
                  px-6
                  py-5
                "
              />
            </div>

          </div>

          <div className="mt-8">
            <label className="block uppercase tracking-[3px] text-sm mb-3">
              Catégorie
            </label>

            <select
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              className="
                w-full
                rounded-full
                border
                bg-[#f3efec]
                px-6
                py-5
              "
            >
              <option value="">
                — Choisir —
              </option>

              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8">
            <label className="block uppercase tracking-[3px] text-sm mb-3">
              Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="
                w-full
                rounded-full
                border
                bg-[#f3efec]
                px-6
                py-4
              "
            />
          </div>

          <div className="flex gap-4 mt-10">

            <button
              type="submit"
              className="
                px-10
                py-4
                rounded-full
                bg-orange-600
                text-white
                font-bold
                text-lg
                hover:bg-orange-700
              "
            >
              Publier le produit
            </button>

            <button
              type="button"
              className="
                px-10
                py-4
                rounded-full
                border
                bg-white
                text-lg
              "
            >
              Annuler
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}