import Header from "../utils/Header";
import Footer from "../utils/Footer";
import CharacteristicCard from "../components/CharacteristicCard";
import CharacteristicCardDesktop from "../components/CharacteristicCardDesktop";
import data from "../data/characteristics.json";
import { useMediaQuery } from "@react-hook/media-query";

export default function Characteristic() {

    const lg = useMediaQuery("(min-width: 1024px");
    return (

        <>
            <div className="bg-green-28 min-h-screen flex flex-col">
                <Header />
                <div className="mt-4 mx-4 flex flex-col gap-8 mb-4 lg:mt-12">
                    {data.characteristics.map((characteristic, index) => (
                        index < data.characteristics.length - 2 && (
                            lg ? (
                                <div className="mx-6">
                                    <CharacteristicCardDesktop key={index} characteristic={characteristic} />
                                </div>
                            ) : (
                                <CharacteristicCard key={index} characteristic={characteristic} />
                            )
                        )
                    ))}
                </div>
                <Footer />
            </div>
        </>

    );
}