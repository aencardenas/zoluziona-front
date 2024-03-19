import Header from "../utils/Header";
import BatteryHome from "../components/BatteryHome";
import CharacteristicsHome from "../components/CharacteristicsHome";
import Footer from "../utils/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <BatteryHome />
            <CharacteristicsHome />
            <Footer />
        </>

    );
}