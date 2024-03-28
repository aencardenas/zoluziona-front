import { useState } from "react";
import MenuMobile from "./MenuMobile";
import logo from "../assets/images/header-logo.png";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);	

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? '' : 'hidden';
  };

  return (
    <>
      <div className="bg-blue-85 flex justify-between items-center h-[60px]">
        <img src={logo} alt="header" className="w-[148px]" />
        <svg
          className="w-[60px] h-[60px] text-white pr-4 lg:hidden"
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
            <li className="cursor-pointer hover:text-green-34">Inicio</li>
            <li className="cursor-pointer hover:text-green-34">Producto</li>
            <li className="cursor-pointer hover:text-green-34">Características</li>
            <li className="cursor-pointer hover:text-green-34">Contacto</li>
          </ul>
        </div>
      </div>
      {showMenu && <MenuMobile onClose={handleShowMenu} />}
    </>
  );
}
