import powerLogo from "../assets/images/footer-logo.png";
import powerGreenLogo from "../assets/images/homeMain-powerGreen-logo.png";
import Button from "../utils/HomeMainButton";
import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <>
    <div className="h-dvh">
      <div className="bg-blue-85 h-[50dvh] flex flex-col gap-4 justify-center items-center lg:flex-row">
        <img src={powerLogo} alt="logo" className="w-64 lg:w-[26rem]" />
        <Link to="/home">
            <Button text="Conoce más" textColor="text-blue-85" bgHover="bg-white" bgActive="bg-white" />
        </Link>
      </div>
      <div className="bg-green-34 h-[50dvh] flex justify-center items-center flex-col lg:flex-row gap-4">
        <img src={powerGreenLogo} alt="" className="w-56 lg:w-96" />
        <Link to="/power-green">
          <Button text="Conoce más" textColor="text-green-34" bgHover="bg-white" bgActive="bg-white" />
        </Link>
      </div>
    </div>
      
    </>
  );
}
