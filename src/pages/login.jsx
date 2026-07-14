import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      login(res.data.token);

      setMessage("✅ Login successful");

      setTimeout(() => {
        navigate("/seller-dashboard");
      }, 1000);

    } catch (err) {
      console.log(err.response?.data);

      setMessage(
        err.response?.data?.message ||
        "❌ Invalid credentials"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex relative items-end p-16 bg-gradient-to-br from-[#e8c6b8] to-[#d7d7d2]">

        <div className="text-white">

          <p className="uppercase tracking-[4px] text-sm mb-6">
            NewSouk
          </p>

          <h1 className="text-7xl font-black">
            Vendez.
          </h1>

          <h2 className="text-6xl italic font-serif">
            En direct.
          </h2>

          <p className="mt-8 text-2xl max-w-lg">
            Rejoignez une communauté d'artisans qui streament
            leur savoir-faire au monde entier.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-8">

        <div className="w-full max-w-xl">

          <h1 className="text-6xl font-black leading-tight">
            Content de vous revoir
          </h1>

          <p className="mt-4 text-gray-500 text-xl">
            Connectez-vous à NewSouk.
          </p>

          {message && (
            <p className="mt-4 font-medium">
              {message}
            </p>
          )}
<button
  type="button"
  onClick={() => {
    window.location.href =
      "http://127.0.0.1:8000/api/auth/google";
  }}
  className="
    w-full mt-10
    border-2 border-black
    rounded-full
    py-5
    text-xl
    font-semibold
    hover:bg-gray-50
  "
>
  Continuer avec Google
</button>

          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500">OU</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                p-5
                rounded-full
                bg-[#f3efec]
                border
                text-xl
              "
              required
            />

            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                p-5
                rounded-full
                bg-[#f3efec]
                border
                text-xl
                mt-4
              "
              required
            />

            <button
              type="submit"
              className="
                w-full
                mt-6
                py-5
                rounded-full
                bg-orange-600
                text-white
                text-xl
                font-bold
                hover:bg-orange-700
              "
            >
              Se connecter
            </button>

          </form>

          <p className="text-center mt-8 text-lg">
            Pas encore de compte ?
            <Link
              to="/register"
              className="text-orange-600 font-bold ml-2"
            >
              S'inscrire
            </Link>
          </p>

          <div className="text-center mt-4">
            <Link
              to="/"
              className="text-gray-500"
            >
              ← Retour à l'accueil
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}