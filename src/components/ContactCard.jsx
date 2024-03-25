import logo from "../assets/images/card-logo.png";
import linea from "../assets/images/contacto-linea.png";

export default function Card() {
  return (
    <>
      <div className="flex justify-center items-center py-11">
        <div className="flex justify-center items-center gap-2 shadow-md rounded-md h-[5.5rem] w-60 lg:w-[300px] lg:h-24">
          <img src={logo} alt="logo" className="w-14 h-14 lg:h-16 lg:w-16" />
          <img src={linea} alt="" className="h-16 lg:h-[70px]" />
          <div className="text-sm text-blue-70 lg:text-base">
            <p className="font-bold">Ventas</p>
            <p>Mérdia, Yucatán</p>
            <p>correo@vetnas.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
