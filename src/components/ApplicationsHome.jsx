import car from "../assets/icons/automovil.png";
import lowSpeedCar from "../assets/icons/Carro-baja-velocidad.png";
import golfCar from "../assets/icons/carro-golf.png";
import home from "../assets/icons/casa.png";
import electronics from "../assets/icons/electronicos.png";
import eolic from "../assets/icons/energia-eolica.png";
import solar from "../assets/icons/energia-solar.png";
import boat from "../assets/icons/lancha.png";
import games from "../assets/icons/videojuegos.png";

export default function ApplicationsHome() {

    const applications = [
        { image: lowSpeedCar, text: 'Autos eléctricos' },
        { image: golfCar, text: 'Carro de golf' },
        { image: boat, text: 'Marinas' },
        { image: home, text: 'Hogar' },
        { image: electronics, text: 'Electrónicos' },
        { image: solar, text: 'Solar' },
        { image: games, text: 'Videojuegos' },
        { image: eolic, text: 'Eólica' }
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
                                className="w-16 lg:w-36"
                            />
                            <span className="lg:text-xl">{application.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}