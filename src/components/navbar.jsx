import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-10">

          <Link
            to="/"
            className="text-3xl font-black italic uppercase text-orange-600"
          >
            NEWSOUK
          </Link>

         <Link
  to="/discover"
  className="hover:text-orange-600 transition-colors"
>
  Discover
</Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {isAuthenticated ? (
            <>
              <Link
                to="/seller-dashboard"
                className="font-medium hover:text-orange-600"
              >
                My Studio
              </Link>

              <button
                onClick={logout}
                className="px-6 py-3 rounded-full border hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-medium hover:text-orange-600"
              >
                Login
              </Link>

              <Link
                to="/become-seller"
                className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-orange-600 transition"
              >
                Become a seller
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}