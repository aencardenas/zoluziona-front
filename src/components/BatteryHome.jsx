import batteryImage from "../assets/images/battery.png";
import HomeButton from "../utils/HomeButton";
export default function BatteryHome() {
    return (
        <>
            <div className="bg-green-34 p-10">
                <div className="flex flex-col gap-7 items-center lg:ml-72">
                    <h1 className="font-bold text-white text-3xl text-center lg:font-bold lg:text-[40px]">El poder del litio LiFePO4</h1>
                    <img src={batteryImage} alt="Zoluziona Battery" className="w-56 lg:absolute lg:left-14 lg:top-20" />
                    <p className="text-white text-base text-center lg:font-normal lg:text-xl">La mejor opción para aplicaciones marinas y de golf</p>
                    <HomeButton text = "Ver detalles"/>
                </div>
            </div>
        </>
    );
}