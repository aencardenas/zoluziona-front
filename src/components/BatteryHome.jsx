import batteryImage from "../assets/images/battery.png";
import HomeButton from "../utils/HomeButton";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";
export default function BatteryHome() {

    const lg = useMediaQuery("(min-width: 1024px");

    return (
        <>
            <div className=" max-w-[1200px] lg:w-full lg:px-7">
                {lg ? (
                    <div className="flex justify-center gap-x-10 items-center">
                        <img src={batteryImage} alt="Zoluziona Battery" className="w-56 lg:order-first" />
                        <div className="flex flex-col gap-y-4 items-center">
                            <h1 className="font-bold text-white text-3xl text-center lg:font-bold lg:text-[40px]">El poder del litio LiFePO4</h1>
                            <p className="text-white text-base text-center lg:font-normal lg:text-xl">La mejor opción para aplicaciones para marina, golf y más</p>
                            <Link to="/product">
                                <HomeButton text="Ver detalles" />
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="font-bold text-white text-3xl text-center lg:font-bold lg:text-[40px]">El poder del litio LiFePO4</h1>
                        <img src={batteryImage} alt="Zoluziona Battery" className="w-56 lg:order-first" />
                        <p className="text-white text-base text-center lg:font-normal lg:text-xl">La mejor opción para aplicaciones marinas y de golf</p>
                        <Link to="/product">
                            <HomeButton text="Ver detalles" />
                        </Link>
                    </div>
                )}

            </div>
        </>
    );
}