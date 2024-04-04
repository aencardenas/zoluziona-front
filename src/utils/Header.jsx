import { useState } from "react";
import MenuMobile from "./MenuMobile";
import logo from "../assets/images/header-logo.png";
import { Link } from "react-router-dom";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-blue-85 flex justify-between items-center h-[60px]">
        <Link to="/home">
          <img src={logo} alt="header" className="w-[148px]" />
        </Link>
        <svg
          className="w-[60px] h-[60px] text-white pr-4 lg:hidden hover:cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          onClick={handleShowMenu}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
        <div className="hidden lg:block mr-7">
          <ul className="flex text-white gap-7 font-semibold text-lg">
            <li className="cursor-pointer hover:text-green-34"><Link to="/home">Inicio</Link></li>
            <li className="cursor-pointer hover:text-green-34"><Link to="/product">Producto</Link></li>
            <li className="cursor-pointer hover:text-green-34"><Link to="/characteristic">Características</Link></li>
            <li className="cursor-pointer hover:text-green-34"><Link to="/contact">Contacto</Link></li>
            <li className="cursor-pointer hover:text-green-34"><Link to="/power-green">Power Green</Link></li>
          </ul>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-screen w-[330px] rounded-xl bg-green-28 z-50 transform transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {showMenu && <MenuMobile onClose={handleShowMenu} />}
      </div>

    </>
  );
}
