const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-2">
      <div className="text-white font-bold text-2xl">Gustavo Aramayo</div>
      <ul className="flex">
        <li className="text-white text-lg mr-5 hover:text-gray-300 cursor-pointer">
          <a href="/projects">/Projects</a>
        </li>
        <li className="text-white text-lg hover:text-gray-300 cursor-pointer">
          <a href="/about">/About</a>
        </li>
        <li className="text-white text-lg ml-5 hover:text-gray-300 cursor-pointer">
          <a href="/contact">/Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
