const Navbar = () => {
  return (
    <nav className="flex max-w-7xl justify-between items-center mx-auto mt-2 mb-36 ">
      <header className="text-white font-bold text-3xl">Gustavo Aramayo</header>
      <ul className="flex">
        <li className="text-white text-xl mr-6 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
          <a href="#projects">{"<Projects />"}</a>
        </li>
        <li className="text-white text-xl cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400">
          <a href="#about">{"<About />"}</a>
        </li>
        <li className="text-white text-xl ml-6 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-400 z-10">
          <a href="#contact">{"<Contact />"}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
