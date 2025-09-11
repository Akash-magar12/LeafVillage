import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Characters", path: "/characters" },
    { name: "World", path: "/world" },
    { name: "Akatsuki", path: "/akatsuki" },
    { name: "Tailed Beasts", path: "/tailed-beasts" },
  ];

  return (
    <nav className="relative flex justify-between items-center px-4 py-4 bg-white b-shad">
      {/* Logo */}
      <Link to="/">
        <h1 className="font-heading text-2xl text-black">🍃 LeafVillage</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex font-heading gap-6 text-lg text-black">
        {navItems.map((l, i) => (
          <li key={i}>
            <Link to={l.path} className="hover:text-gray-600 transition">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-black"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-4 font-heading text-lg text-black">
            {navItems.map((l, i) => (
              <li key={i}>
                <Link
                  to={l.path}
                  className="hover:text-gray-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
