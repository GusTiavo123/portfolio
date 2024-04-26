const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-2">
      <div className="text-white font-bold text-2xl">Gustavo Aramayo</div>
      <ul className="flex">
        <li className="text-white text-lg mr-6 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
          <a href="/projects">/Projects</a>
        </li>
        <li className="text-white text-lg cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
          <a href="/about">/About</a>
        </li>
        <li className="text-white text-lg ml-6 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
            <a href="/contact">/Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
