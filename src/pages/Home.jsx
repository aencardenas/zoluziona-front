import Header from "../utils/Header";
import BatteryHome from "../components/BatteryHome";
import CharacteristicsHome from "../components/CharacteristicsHome";
import ApplicationsHome from "../components/ApplicationsHome";
import CertificationsHome from "../components/CertificationsHome";
import Line from "../utils/Line";
import Footer from "../utils/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <BatteryHome />
            <div className="pt-5 pl-3 pb-4">
                <CharacteristicsHome />
            </div>
            <Line />
            <div className="px-4 mt-4">
                <ApplicationsHome />
            </div>
            <Line />
            <div className="px-4 pb-6">
                <CertificationsHome />
            </div>
            <Footer />
        </>

    );
}