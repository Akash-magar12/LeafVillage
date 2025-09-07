import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative bg-zinc-900 min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://github.com/viniciusschuelter/dattebayo/blob/main/src/assets/images/characters.jpg?raw=true" // example Naruto wallpaper
          alt="Leaf Village"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative font-body z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
          🍃 Welcome to LeafVillage
        </h1>
        <p className="text-lg text-white mb-6">
          Discover Naruto characters, explore clans and villages, and dive into
          the shinobi world using the Databayo API.
        </p>
        <Link
          to="/characters"
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Explore Characters
        </Link>
      </div>
    </section>
  );
};

export default Home;
