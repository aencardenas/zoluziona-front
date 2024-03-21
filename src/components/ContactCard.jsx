import logo from "../assets/images/contact-logo.png";
import linea from "../assets/images/contacto-linea.png"

export default function Card() {
  return (
    <>
      <div className="flex justify-center items-center mx-6 py-11">
        <div className="flex justify-center items-center gap-2 shadow-md rounded-md h-[5.5rem] w-60">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <img src={linea} alt="" className="h-16" />
          <div className="text-sm text-blue-70">
            <p className="font-bold">Ventas</p>
            <p>Mérdia, Yucatán</p>
            <p>correo@vetnas.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
