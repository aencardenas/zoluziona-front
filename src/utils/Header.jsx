import logo from "../assets/images/header-logo.png";

export default function Header() {
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
            <li>Inicio</li>
            <li>Producto</li>
            <li>Características</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </>
  );
}
