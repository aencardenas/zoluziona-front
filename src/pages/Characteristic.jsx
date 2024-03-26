import Header from "../utils/Header";
import Footer from "../utils/Footer";
import CharacteristicCard from "../components/CharacteristicCard";
import data from "../data/characteristics.json";

export default function Characteristic() {
    return (

        <>
            <div className="bg-green-28 min-h-screen flex flex-col">
                <Header />
                <div className="mt-4 mx-4 flex flex-col gap-8 mb-4">
                    {data.characteristics.map((characteristic, index) => (
                        <CharacteristicCard key={index} characteristic={characteristic}/>
                    ))}
                </div>
                <Footer />
            </div>
        </>

    );
}