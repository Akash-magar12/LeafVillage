import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 font-heading"> 🍃 LeafVillage</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            Dive into the world of Naruto — characters, clans, villages, and
            jutsu, all in one place 🌿.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", to: "/" },
              { name: "Characters", to: "/characters" },
              { name: "World", to: "/world" },
              { name: "About", to: "/about" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-600 hover:text-orange-500 transition-colors inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Follow us for updates and Naruto content.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-orange-500 flex items-center justify-center transition-all"
            >
              <Github className="h-5 w-5 text-gray-800" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-sky-500 flex items-center justify-center transition-all"
            >
              <Twitter className="h-5 w-5 text-gray-800" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 flex items-center justify-center transition-all"
            >
              <Instagram className="h-5 w-5 text-gray-800" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Hidden Leaf Database • Built with{" "}
          <span className="text-red-500">❤️</span> for Naruto fans
        </p>
        <div className="mt-2 flex justify-center gap-6">
          <Link
            to="/privacy"
            className="hover:text-orange-500 transition-colors"
          >
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-orange-500 transition-colors">
            Terms
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
