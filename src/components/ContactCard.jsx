import logo from "../assets/images/card-logo.png";
import linea from "../assets/images/contacto-linea.png";

export default function Card({text, title}) {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center gap-2 shadow-md rounded-md h-[5.5rem]  lg:h-24 w-full">
          <img src={logo} alt="logo" className="w-14 h-14 lg:h-16 lg:w-16" />
          <img src={linea} alt="" className="h-16 lg:h-[70px]" />
          <div className="text-sm text-blue-70 lg:text-base">
            <p className="font-bold">{title}</p>
            <p>Mérdia, Yucatán</p>
            <p className="text-sm">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
