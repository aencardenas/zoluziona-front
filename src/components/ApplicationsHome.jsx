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
    return (

        <>
            <div>
                <div className="flex justify-center pb-4">
                    <h1 className="font-semibold text-2xl text-black-101">APLICACIONES</h1>
                </div>
                <div>
                    <div className="flex flex-col">
                        <img src={car} alt="Auto" />
                        <span>Autos</span>
                    </div>
                    <div className="flex flex-col">
                        <img src={lowSpeedCar} alt="Auto baja velocidad" />
                        <span>Autos</span>
                    </div>
                    <div className="flex flex-col">
                        <img src={golfCar} alt="Carro de golf" />
                        <span>Autos</span>
                    </div>
                </div>
            </div>
        </>

    );
}