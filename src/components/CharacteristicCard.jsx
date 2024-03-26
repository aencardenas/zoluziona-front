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

    const { name, descriptions, img } = characteristic

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
            <div className="flex flex-col bg-white px-8 py-2 rounded-[10px]">
                <div className="flex justify-start items-center">
                    <svg className="w-10 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={toggleList}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                    <img src={images[name]} className="w-16" alt={name}></img>
                    <span className="font-bold text-xl w-full">{name}</span>
                </div>
                {showList && (
                    <ul className="flex flex-col gap-y-4 list-disc text-justify text-">
                        {descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>

    );
}