const Navbar = () => {
  return (
    <nav className="flex justify-between space-between">
      <div className="text-white font-bold">Gustavo Aramayo</div>
      <div className="text-white">
        <a href="/work" className="pr-4 hover:text-gray-300">
          /Work
        </a>
        <a href="/about" className=" hover:text-gray-300">
          /About
        </a>
        <a href="/contact" className="pl-4 hover:text-gray-300">
          /Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
