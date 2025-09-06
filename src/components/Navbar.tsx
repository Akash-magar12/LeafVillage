const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="font-heading text-2xl">🍃 LeafVillage</h1>
      <ul className="flex font-body gap-2">
        <li>Home</li>
        <li>Characters</li>
        <li>World</li>
      </ul>
    </nav>
  );
};

export default Navbar;
