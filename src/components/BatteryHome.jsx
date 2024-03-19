import batteryImage from "../assets/images/battery.png";
import HomeButton from "../utils/HomeButton";
export default function BatteryHome() {
    return (
        <>
            <div className="bg-green-34 p-10">
                <div className="flex flex-col gap-7 items-center">
                    <p className="font-bold text-white text-3xl text-center">El poder del litio LiFePO4</p>
                    <img src={batteryImage} alt="Zoluziona Battery" className="w-56" />
                    <p className="text-white text-base text-center">La mejor opción para aplicaciones marinas y de golf</p>
                    <HomeButton />
                </div>
            </div>
        </>
    );
}