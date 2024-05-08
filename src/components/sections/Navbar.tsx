const Navbar = () => {
  return (
    <nav className="flex md:max-w-7xl max-w-5xl md:justify-between items-center mx-auto mt-2 lg:mb-36 md:mb-28 mb-20 z-10">
      <header className="md:text-white text-custom-green font-bold z-10 md:text-3xl text-2xl">Gustavo Aramayo</header>
      <ul className="md:flex md:text-xl text-white">
        <li className="md:mr-6 mr-3 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-300">
          <a href="#projects" className="md:inline hidden ">{"<Projects />"}</a>
        </li>
        <li className="cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-300 z-10">
          <a href="#about" className="md:inline hidden">{"<About />"}</a>
        </li>
        <li className="md:ml-6 ml-3 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-300 z-10">
          <a href="#contact" className="md:inline hidden">{"<Contact />"}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;