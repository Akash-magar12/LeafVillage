import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <h1 className="font-heading text-2xl text-black">🍃 LeafVillage</h1>

      {/* Deskhrefp Menu */}
      <ul className="hidden md:flex font-heading gap-6 text-lg text-black">
        <li>
          <Link to="/" className="hover:text-gray-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/characters" className="hover:text-gray-600 transition">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/world" className="hover:text-gray-600 transition">
            World
          </Link>
        </li>
      </ul>

      {/* Mobile hrefggle */}
      <button
        className="md:hidden text-black"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute hrefp-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-4 font-heading text-lg text-black">
            <li>
              <Link
                to="/"
                className="hover:text-gray-600 transition"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/characters"
                className="hover:text-gray-600 transition"
                onClick={() => setOpen(false)}
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                to="/world"
                className="hover:text-gray-600 transition"
                onClick={() => setOpen(false)}
              >
                World
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
