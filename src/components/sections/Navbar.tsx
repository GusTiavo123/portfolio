const Navbar = () => {
  return (
    <nav className="flex md:max-w-7xl max-w-5xl justify-between items-center mx-auto mt-2 mb-36 z-10">
      <header className="text-white font-bold z-10 md:text-3xl text-2xl">Gustavo Aramayo</header>
      <ul className="flex md:text-xl text-white">
        <li className="md:mr-6 mr-3 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-300">
          <a href="#projects" className="sm:inline hidden">{"<Projects />"}</a>
          <a href="#projects" className="sm:hidden text-custom-green">/Projects</a>
        </li>
        <li className="cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-300 z-10">
          <a href="#about" className="sm:inline hidden">{"<About />"}</a>
          <a href="#about" className="sm:hidden text-custom-green">/About</a>
        </li>
        <li className="md:ml-6 ml-3 cursor-pointer transform hover:-translate-y-1 hover:text-gray-300 transition duration-300 z-10">
          <a href="#contact" className="sm:inline hidden">{"<Contact />"}</a>
          <a href="#contact" className="sm:hidden text-custom-green">/Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
