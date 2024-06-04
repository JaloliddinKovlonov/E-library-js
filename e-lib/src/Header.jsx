import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center h-[92px] max-w-[1240px] mx-auto px-4 bg-[#e5e8eb] rounded">
      <h1 className="text-3xl font-bold font-noto-serif text-[#0D141C]">
        E-library
      </h1>
      <ul className="hidden md:flex m-4 font-noto-serif items-center">
        <li className="p-4">
          <a
            href="http://localhost:5173/"
            className="no-underline rounded text-black hover:bg-white px-6 py-2"
          >
            Home
          </a>
        </li>
        <li className="p-4">
          <a
            href="#explore"
            className="no-underline text-black rounded hover:bg-white px-6 py-2"
          >
            Explore
          </a>
        </li>
        <li className="p-4 relative group">
          <button className="no-underline text-black rounded hover:bg-white px-6 py-2">
            Genre
          </button>
          <ul className="absolute top-full py-2 text-sm items-center left-0 w-full bg-white shadow-lg rounded mt-1 hidden group-hover:block">
            <li className="p-2 hover:bg-gray-200">
              <a href="#genre" className="no-underline text-black">
                Fiction
              </a>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <a href="#genre" className="no-underline text-black">
                Non-Fiction
              </a>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <a href="#genre" className="no-underline text-black">
                Science Fiction
              </a>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <a href="#genre" className="no-underline text-black">
                Fantasy
              </a>
            </li>
          </ul>
        </li>
        <li className="p-4">
          <a
            href="#about"
            className="no-underline text-black rounded hover:bg-white px-6 py-2"
          >
            About
          </a>
        </li>
      </ul>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/signin" className="no-underline">
          <button className="font-noto-serif p-2 rounded hover:bg-blue-700 text-black">
            SignIn
          </button>
        </Link>
        <Link to="/signup" className="no-underline">
          <button className="font-noto-serif bg-blue-500 hover:bg-blue-700 p-2 rounded px-6 text-black">
            SignUp
          </button>
        </Link>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r rounded-r-3xl bg-[#e5e8eb] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold font-noto-serif text-[#0D141C] m-4">
          E-library
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-900">
            <a href="http://localhost:5173/" className="no-underline text-black">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-900">
            <a href="#explore" className="no-underline text-black">
              Explore
            </a>
          </li>
          <li className="p-4 border-b border-gray-900 relative group">
            <button className="no-underline text-black rounded hover:bg-white px-6 py-2">
              Genre
            </button>
            <ul className="mt-1 hidden group-hover:block">
              <li className="p-2 hover:bg-gray-200">
                <a href="#genre" className="no-underline text-black">
                  Fiction
                </a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#genre" className="no-underline text-black">
                  Non-Fiction
                </a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#genre" className="no-underline text-black">
                  Science Fiction
                </a>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <a href="#genre" className="no-underline text-black">
                  Fantasy
                </a>
              </li>
            </ul>
          </li>
          <li className="p-4 border-b border-gray-900">
            <a href="#about" onClick={handleNav} className="no-underline text-black">
              About
            </a>
          </li>
          <li className="p-4">
            <Link
              to="/signin" onClick={handleNav}
              className="font-noto-serif p-2 rounded hover:bg-blue-700 text-black no-underline"
            >
              SignIn
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="/signup" onClick={handleNav}
              className="font-noto-serif bg-blue-500 hover:bg-blue-700 p-2 rounded px-6 text-white no-underline"
            >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
