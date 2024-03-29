import { useState } from "react";
import ambient from "../assets/icons/ambiental.png";
import fastCharge from "../assets/icons/carga-rapida.png";
import lifeCycle from "../assets/icons/ciclo-vida.png";
import energyDensity from "../assets/icons/densidad-energia.png";
import security from "../assets/icons/seguridad.png";
import discharge from "../assets/icons/tasa-descarga.png";
import temperature from "../assets/icons/temperatura.png";


export default function CharacteristicCard({ characteristic }) {

    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(!showList)
    }

    const { name, descriptions } = characteristic

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
            <div className="flex flex-col bg-white px-8 py-2 rounded-[10px]" onClick={toggleList}>
                <div className="flex justify-start items-center">
                    <svg
                        className={`w-10 h-6 text-blue-85 absolute left-6 transform transition-transform ${showList ? 'rotate-90' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <img src={images[name]} className="w-16" alt={name}></img>
                    <span className="font-bold text-xl w-full">{name}</span>
                </div>
                {showList && (
                    <ul className="flex flex-col gap-y-4 list-disc text-justify pl-6 py-4">
                        {descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>

    );
}