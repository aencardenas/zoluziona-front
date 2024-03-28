import data from "../data/characteristics.json";
import ambient from "../assets/icons/ambiental.png";
import fastCharge from "../assets/icons/carga-rapida.png";
import lifeCycle from "../assets/icons/ciclo-vida.png";
import energyDensity from "../assets/icons/densidad-energia.png";
import security from "../assets/icons/seguridad.png";
import discharge from "../assets/icons/tasa-descarga.png";
import temperature from "../assets/icons/temperatura.png";
import HomeButton from "../utils/HomeButton";

export default function CharacteristicsHome() {

    const images = {
        "Alta Seguridad": security,
        "Ciclo de vida prolongado": lifeCycle,
        "Capacidad de carga rápida": fastCharge,
        "Alta densidad de energía": energyDensity,
        "Baja tasa de autodescarga": discharge,
        "Amplio rango de temperatura": temperature,
        "Ecofriendly": ambient,
        "Diseño liviano": ambient,
        "Cero mantenimiento": security
    }

    return (
        <>
            <div>
                <div className="flex justify-center pb-4">
                    <h1 className="font-semibold text-2xl text-black-101 lg:text-[32px] lg:font-bold lg:mt-4">CARACTERÍSTICAS</h1>
                </div>
                <div className="xs:flex xs:justify-center md:flex md:justify-center">
                    <ul className="pb-4 xs:columns-2 md:columns-2 lg:columns-2">
                        {data.characteristics.map((characteristic, index) => (
                            <li key={index} className="flex items-center lg:mr-8">
                                <img
                                    src={images[characteristic.name]}
                                    alt={characteristic.name}
                                    className="w-10 lg:w-16"
                                />
                                <span className="text-base lg:text-2xl">{characteristic.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center">
                    <HomeButton text="Ver más" />
                </div>
            </div>
        </>
    );
}

