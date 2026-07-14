import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f2]">

      {/* HERO */}
      <section className="grid md:grid-cols-2 min-h-[85vh]">

        {/* LEFT */}
        <div className="flex flex-col justify-center px-12">

          <div className="inline-flex items-center gap-2 border border-black rounded-full px-4 py-2 w-fit mb-8 bg-white">
            🔴
            <span className="font-semibold text-black">
              0 LIVE NOW
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-none text-black">
            NewSouk
          </h1>

          <h2 className="text-6xl md:text-7xl italic text-orange-500 mt-2">
            live commerce.
          </h2>

          <p className="mt-8 text-xl text-black max-w-xl">
            Buy directly from sellers during live streams.
            Discover authentic products and interact in real time.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              to="/register"
              className="btn bg-white text-black border-black hover:bg-black hover:text-white rounded-full px-8"
            >
              Become a Seller
            </Link>

          </div>

          <div className="flex gap-16 mt-16">

            <div>
              <h3 className="text-4xl font-bold text-black">0</h3>
              <p className="text-sm uppercase text-black">
                Live Now
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-black">7</h3>
              <p className="text-sm uppercase text-black">
                Categories
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-black">24/7</h3>
              <p className="text-sm uppercase text-black">
                Marketplace
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-orange-50 flex items-center justify-center">

          <div className="bg-white rounded-3xl p-10 shadow-lg w-[450px]">

            <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-7xl">
              ✨
            </div>

            <h2 className="text-3xl italic text-center mt-8 text-black">
              No live streams yet
            </h2>

            <p className="text-center text-black mt-3">
              Be the first seller to go live.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto py-20 px-8">

        <h2 className="text-5xl font-bold text-center mb-16 text-black">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="card bg-white shadow-lg border">
            <div className="card-body">
              <h3 className="card-title text-2xl text-black">
                Discover
              </h3>

              <p className="text-black">
                Browse live sellers and discover unique products.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-lg border">
            <div className="card-body">
              <h3 className="card-title text-2xl text-black">
                Watch
              </h3>

              <p className="text-black">
                Join live streams and interact with sellers in real time.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-lg border">
            <div className="card-body">
              <h3 className="card-title text-2xl text-black">
                Buy
              </h3>

              <p className="text-black">
                Purchase instantly during live sessions.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}