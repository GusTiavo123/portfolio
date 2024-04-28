const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-2">
      <div className="text-white font-semi-bold text-3xl">Gustavo Aramayo</div>
      <ul className="flex">
        <li className="text-white text-xl mr-6 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
          <a href="/projects">/Projects</a>
        </li>
        <li className="text-white text-xl cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
          <a href="/about">/About</a>
        </li>
        <li className="text-white text-xl ml-6 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
            <a href="/contact">/Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
