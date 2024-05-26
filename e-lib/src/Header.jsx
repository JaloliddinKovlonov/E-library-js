import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


function Navbar() {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[92px] max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold font-noto-serif text-[#0D141C]">
        E-library
      </h1>
      <ul className=" my-0 hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Explore</li>
        <li className="p-4">Community</li>
        <li className="p-4">About</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r rounded-r-3xl bg-[#e5e8eb] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold font-noto-serif text-[#0D141C] m-4">
          E-library
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-900">Home</li>
          <li className="p-4 border-b border-gray-900">Explore</li>
          <li className="p-4 border-b border-gray-900">Community</li>
          <li className="p-4">About</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
