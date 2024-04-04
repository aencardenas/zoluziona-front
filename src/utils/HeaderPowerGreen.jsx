import logo from "../assets/images/homeMain-powerGreen-logo.png";


export default function Header() {

  return (
    <>
      <div className="bg-green-34 flex justify-between items-center h-[60px]">

          <img src={logo} alt="header" className="w-[148px] px-3" />

        
      </div>

    </>
  );
}