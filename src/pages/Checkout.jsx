import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function Checkout() {

  const { productId } = useParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: ""
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const confirmOrder = async () => {

    try {

      const res = await api.post("/orders", {

        product_id: productId,

        name: form.name,
        phone: form.phone,
        address: form.address,
        city: form.city

      });


      setMessage(res.data.message);


    } catch (error) {

      console.log(error);

      setMessage("Erreur lors de la commande");

    }

  };


  return (
    <div className="p-8 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>


      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nom complet"
        className="input input-bordered w-full mb-3"
      />


      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Téléphone"
        className="input input-bordered w-full mb-3"
      />


      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Adresse"
        className="input input-bordered w-full mb-3"
      />


      <input
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="Ville"
        className="input input-bordered w-full mb-3"
      />


      <button
        onClick={confirmOrder}
        className="btn btn-success w-full"
      >
        Confirmer la commande
      </button>


      {message && (

        <div className="alert alert-success mt-5">
          {message}
        </div>

      )}


    </div>
  );
}