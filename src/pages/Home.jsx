import Header from "../utils/Header";
import BatteryHome from "../components/BatteryHome";
import CharacteristicsHome from "../components/CharacteristicsHome";
import ApplicationsHome from "../components/ApplicationsHome";
import Footer from "../utils/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <BatteryHome />
            <div className="pt-5 pl-3 pb-4">
                <CharacteristicsHome />
            </div>
            <ApplicationsHome />
            <Footer />
        </>

    );
}