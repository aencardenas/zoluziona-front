import Header from "../utils/HeaderPowerGreen";
import Button from "../utils/HomeMainButton";
import { Link } from "react-router-dom";

export default function HomePowerGreen() {
  return (
    <>
      <Header />
      <div className="lg:bg-banner-powerGreen bg-banner-powerGreen-mobile flex-1 bg-cover bg-center flex flex-col justify-center items-center h-dvh">
        <div className="pt-[17rem] flex flex-col lg:flex-row gap-8 justify-center items-center">
          <p className="text-white text-4xl text-center">
            Sitio en construcción
          </p>
          <Link to="/home">
            <Button
              text="Conoce POWER"
              textColor="text-white"
              bgHover="bg-blue-85"
              bgActive="bg-blue-85"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
