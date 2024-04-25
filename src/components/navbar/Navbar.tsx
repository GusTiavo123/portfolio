import "./navbar.css";

const Navbar = () => {
  return (
      <nav className="flex justify-between items-center pt-2">
        <div className="text-white font-bold text-2xl">Gustavo Aramayo</div>
        <div>
          <a
            href="#"
            className="text-white mr-5 hover:text-gray-300 cursor-pointer"
          >
            /Work
          </a>
          <a
            href="/about"
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            /About
          </a>
          <a
            href="/contact"
            className="text-white ml-5 hover:text-red-600 cursor-pointer"
          >
            /Contact
          </a>
        </div>
      </nav>
  );
};

export default Navbar;
