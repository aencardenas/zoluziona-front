import ambient from "../assets/icons/ambiental.webp";
import fastCharge from "../assets/icons/carga-rapida.webp";
import lifeCycle from "../assets/icons/ciclo-vida.webp";
import energyDensity from "../assets/icons/densidad-energia.webp";
import security from "../assets/icons/seguridad.webp";
import discharge from "../assets/icons/tasa-descarga.webp";
import temperature from "../assets/icons/temperatura.webp";

export default function CharacteristicCardDesktop({ characteristic }) {


    const { name, descriptions } = characteristic

    const images = {
        "Alta Seguridad": security,
        "Ciclo de vida prolongado": lifeCycle,
        "Capacidad de carga rápida": fastCharge,
        "Alta densidad de energía": energyDensity,
        "Baja tasa de autodescarga": discharge,
        "Amplio rango de temperatura": temperature,
        "Respeto al medio ambiente": ambient,
        "Diseño liviano": ambient,
        "Cero mantenimiento": security
    }

    return (

        <>
            <div className="bg-white rounded-[10px]">
                <div className="bg-blue-85 text-center p-4 rounded-[10px]">
                    <span className="font-bold text-2xl text-white">{name}</span>
                </div>
                <div className="flex items-center px-8 py-10 gap-4 md:pr-20">
                    <img src={images[name]} className="w-40"/>
                    <ul className="flex flex-col gap-y-2 list-disc text-justify w-full text-[22px]">
                        {descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </>

    );
}