import Header from "../utils/Header";
import Footer from "../utils/Footer";
import CharacteristicCard from "../components/CharacteristicCard";
import CharacteristicCardDesktop from "../components/CharacteristicCardDesktop";
import data from "../data/characteristics.json";
import { useMediaQuery } from "@react-hook/media-query";

export default function Characteristic() {

    const md = useMediaQuery("(min-width: 768px");
    return (

        <>
            <div className="bg-green-28 min-h-screen flex flex-col">
                <Header />
                <div className="my-4 mx-4 flex flex-col gap-8 md:mb-12 md:mt-12">
                    {data.characteristics.map((characteristic, index) => (
                        index < data.characteristics.length - 2 && (
                            md ? (
                                <div key={characteristic.descriptions} className="max-w-[1024px] mx-auto w-full">
                                    <CharacteristicCardDesktop key={index} characteristic={characteristic} />
                                </div>
                            ) : (
                                <CharacteristicCard key={characteristic.name} characteristic={characteristic} />
                            )
                        )
                    ))}
                </div>
                <Footer />
            </div>
        </>

    );
}