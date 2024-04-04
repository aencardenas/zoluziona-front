import autoElectrico from "../assets/icons/autosElectricos.webp";
import golfCar from "../assets/icons/carroGolf.webp";
import home from "../assets/icons/hogar.webp";
import electronics from "../assets/icons/electronicos.webp";
import eolic from "../assets/icons/eolica.webp";
import solar from "../assets/icons/solar.webp";
import boat from "../assets/icons/marinas.webp";
import games from "../assets/icons/videojuegos.webp";
import camping from "../assets/icons/camping.webp";
import lowSpeedCar from "../assets/icons/lowSpeedCar.webp";

export default function ApplicationsHome() {

    const applications = [
        { image: autoElectrico, text: 'Autos eléctricos' },
        { image: golfCar, text: 'Carro de golf' },
        { image: boat, text: 'Marinas' },
        { image: home, text: 'Hogar' },
        { image: electronics, text: 'Electrónicos' },
        { image: solar, text: 'Solar' },
        { image: games, text: 'Videojuegos' },
        { image: eolic, text: 'Eólica' },
        { image: camping, text: 'RV Camping' },
        { image: lowSpeedCar, text: 'Low Speed Car' },
    ]
    return (

        <>
            <div>
                <div className="flex justify-center pb-6">
                    <h1 className="font-semibold text-2xl text-black-101 lg:text-[32px] lg:font-bold">APLICACIONES</h1>
                </div>
                <div className="flex flex-wrap items-end gap-4 justify-center lg:gap-8">
                    {applications.map((application, index) => (
                        <div key={index} className="flex flex-col justify-center items-center min-w-32 lg:gap-x-20">
                            <img
                                src={application.image}
                                alt={application.text}
                                className="w-14 lg:w-36"
                            />
                            <span className="lg:text-xl">{application.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}