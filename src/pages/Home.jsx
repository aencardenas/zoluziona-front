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
            <div className="bg-green-34 p-10 flex justify-center items-center">
                <BatteryHome />
            </div>
            <div className="lg:min-w-[1024px] lg:max-w-[1500px] lg:mx-auto lg:w-full mx-7 lg:px-7">
                <div className="pt-5 pl-3 pb-4 lg:flex lg:justify-center">
                    <CharacteristicsHome />
                </div>
                <Line />
                <div className="px-4 mt-4">
                    <ApplicationsHome />
                </div>
                <Line />
                <div className="pb-6">
                    <CertificationsHome />
                </div>

            </div>
            <Footer />



        </>

    );
}